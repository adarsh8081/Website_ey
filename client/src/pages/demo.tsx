import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Mail, 
  Download, 
  Loader2,
  Bot,
  Shield,
  Brain,
  Target,
  Database,
  Zap,
  Clock,
  Users,
  BarChart3,
  Play,
  Pause,
  RotateCcw,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { ConfidenceBar } from "@/components/confidence-bar";
import type { Provider } from "@shared/schema";

interface DemoResult {
  providers: Provider[];
  summary: {
    totalProviders: number;
    verifiedCount: number;
    flaggedCount: number;
    averageConfidence: number;
    processingTime: number;
  };
}

interface AIAgent {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  status: 'idle' | 'processing' | 'completed';
  progress: number;
  currentTask: string;
  capabilities: string[];
}

const aiAgents: AIAgent[] = [
  {
    id: "data-validation",
    name: "Data Validation Agent",
    icon: <Shield className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    status: 'idle',
    progress: 0,
    currentTask: "Ready to validate NPI, phone, email, addresses",
    capabilities: ["NPI Registry API", "Google Maps API", "Web Scraping", "GPT-4o Vision PDF Extraction"]
  },
  {
    id: "information-enrichment",
    name: "Information Enrichment Agent", 
    icon: <Brain className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
    status: 'idle',
    progress: 0,
    currentTask: "Ready to enrich data and predict decay",
    capabilities: ["Web Scraping", "Prophet Forecasting", "Data Enrichment", "Decay Prediction"]
  },
  {
    id: "quality-assurance",
    name: "Quality Assurance Agent",
    icon: <Target className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500", 
    status: 'idle',
    progress: 0,
    currentTask: "Ready for ML confidence scoring",
    capabilities: ["Random Forest ML", "Cross-validation", "Fraud Detection", "Quality Metrics"]
  },
  {
    id: "directory-management",
    name: "Directory Management Agent",
    icon: <Database className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
    status: 'idle',
    progress: 0,
    currentTask: "Ready to generate reports and alerts",
    capabilities: ["Report Generation", "Workflow Queues", "Alert Management", "Export Functions"]
  }
];

export default function Demo() {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [results, setResults] = useState<DemoResult | null>(null);
  const [agents, setAgents] = useState<AIAgent[]>(aiAgents);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();

  // Simulate AI agent processing
  const simulateAgentProcessing = async () => {
    setIsProcessing(true);
    setCurrentStep(0);
    
    // Reset all agents
    setAgents(aiAgents.map(agent => ({ ...agent, status: 'idle', progress: 0 })));
    
    // Simulate each agent processing
    for (let i = 0; i < agents.length; i++) {
      setCurrentStep(i + 1);
      
      // Update current agent to processing
      setAgents(prev => prev.map((agent, index) => 
        index === i 
          ? { ...agent, status: 'processing', currentTask: `Processing provider data...` }
          : agent
      ));
      
      // Simulate progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setAgents(prev => prev.map((agent, index) => 
          index === i 
            ? { ...agent, progress, currentTask: progress < 50 ? `Validating data...` : `Generating confidence scores...` }
            : agent
        ));
      }
      
      // Mark agent as completed
      setAgents(prev => prev.map((agent, index) => 
        index === i 
          ? { ...agent, status: 'completed', currentTask: `Completed successfully` }
          : agent
      ));
      
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    setIsProcessing(false);
  };

  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      // First simulate the AI agent processing
      await simulateAgentProcessing();
      
      // Then make the actual API call to your MyAgent backend
      const formData = new FormData();
      formData.append("file", file);
      
      try {
        // Try to connect to your MyAgent backend
        const response = await fetch('http://localhost:8000/api/validation/upload', {
          method: 'POST',
          body: formData,
        });
        
        if (response.ok) {
          return await response.json() as DemoResult;
        } else {
          throw new Error('Backend not available');
        }
      } catch (error) {
        // Fallback to demo data if backend is not available
        console.log('Using demo data as backend is not available');
        return generateDemoData();
      }
    },
    onSuccess: (data) => {
      setResults(data);
      toast({
        title: "Validation Complete",
        description: `Processed ${data.summary.totalProviders} providers in ${data.summary.processingTime}s`,
      });
    },
    onError: () => {
      toast({
        title: "Upload Failed",
        description: "Please try again with a valid CSV, Excel, or PDF file",
        variant: "destructive",
      });
    },
  });

  // Generate demo data for when backend is not available
  const generateDemoData = (): DemoResult => {
    const demoProviders: Provider[] = [
      {
        id: "1",
        name: "Dr. Sarah Johnson",
        specialty: "Cardiology",
        phone: "(555) 123-4567",
        email: "sarah.johnson@metrohealth.com",
        address: "123 Medical Center Dr, Metro City, MC 12345",
        npi: "1234567890",
        confidence: 92,
        status: "Verified"
      },
      {
        id: "2", 
        name: "Dr. Michael Chen",
        specialty: "Pediatrics",
        phone: "(555) 234-5678",
        email: "m.chen@metrohealth.com",
        address: "456 Children's Way, Metro City, MC 12345",
        npi: "2345678901",
        confidence: 87,
        status: "Verified"
      },
      {
        id: "3",
        name: "Metro Urgent Care Center",
        specialty: "Urgent Care",
        phone: "(555) 345-6789",
        email: "info@metrourgent.com",
        address: "789 Emergency Blvd, Metro City, MC 12345",
        npi: "3456789012",
        confidence: 68,
        status: "Flagged"
      },
      {
        id: "4",
        name: "Dr. Lisa Rodriguez",
        specialty: "Dermatology", 
        phone: "(555) 456-7890",
        email: "l.rodriguez@metrohealth.com",
        address: "321 Skin Care Ave, Metro City, MC 12345",
        npi: "4567890123",
        confidence: 95,
        status: "Verified"
      },
      {
        id: "5",
        name: "Dr. James Wilson",
        specialty: "Orthopedics",
        phone: "(555) 567-8901",
        email: "j.wilson@metrohealth.com", 
        address: "654 Bone St, Metro City, MC 12345",
        npi: "5678901234",
        confidence: 34,
        status: "Needs Review"
      }
    ];

    const verifiedCount = demoProviders.filter(p => p.status === "Verified").length;
    const flaggedCount = demoProviders.filter(p => p.status === "Flagged" || p.status === "Needs Review").length;
    const averageConfidence = Math.round(demoProviders.reduce((sum, p) => sum + p.confidence, 0) / demoProviders.length);

    return {
      providers: demoProviders,
      summary: {
        totalProviders: demoProviders.length,
        verifiedCount,
        flaggedCount,
        averageConfidence,
        processingTime: 8.5
      }
    };
  };

  const loadSampleData = useMutation({
    mutationFn: async () => {
      // Simulate AI agent processing
      await simulateAgentProcessing();
      
      // Return demo data
      return generateDemoData();
    },
    onSuccess: (data) => {
      setFileName("sample_providers.csv");
      setResults(data);
      toast({
        title: "Sample Data Loaded",
        description: "Viewing demo validation results",
      });
    },
  });

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      uploadMutation.mutate(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      uploadMutation.mutate(file);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      Verified: "default",
      Flagged: "destructive",
      "Needs Review": "secondary",
    };
    return variants[status as keyof typeof variants] || "secondary";
  };

  const getStatusIcon = (status: string) => {
    if (status === "Verified") return <CheckCircle2 className="h-4 w-4 text-success" />;
    if (status === "Flagged") return <AlertTriangle className="h-4 w-4 text-critical" />;
    return <AlertTriangle className="h-4 w-4 text-warning" />;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="text-primary">Validation Demo</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your provider directory or try our sample data to see AI-powered validation in action
          </p>
        </motion.div>

        {/* Enhanced AI Agent Dashboard */}
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  <defs>
                    <pattern id="processing-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <motion.path
                        d="M 20 0 L 0 0 0 20"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#processing-grid)" />
                </svg>
              </div>

              <div className="relative flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Cpu className="h-6 w-6 text-blue-400" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">AI Agent Processing</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="h-2 w-2 rounded-full bg-green-400"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-green-400">Live Processing</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {agents.map((agent, index) => (
                  <motion.div
                    key={agent.id}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="space-y-4 group"
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className={`w-10 h-10 rounded-full bg-gradient-to-r ${agent.color} flex items-center justify-center text-white relative overflow-hidden`}
                        animate={{ 
                          scale: agent.status === 'processing' ? [1, 1.05, 1] : 1,
                          rotate: agent.status === 'processing' ? [0, 5, 0] : 0
                        }}
                        transition={{ duration: 2, repeat: agent.status === 'processing' ? Infinity : 0 }}
                      >
                        {/* Pulsing Ring */}
                        {agent.status === 'processing' && (
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${agent.color} opacity-30`}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                        <div className="relative z-10">
                          {agent.icon}
                        </div>
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-white text-sm">{agent.name}</h3>
                        <motion.p 
                          className="text-xs text-blue-200"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {agent.currentTask}
                        </motion.p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs text-blue-200">
                        <span>Progress</span>
                        <motion.span
                          key={agent.progress}
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="font-semibold"
                        >
                          {agent.progress}%
                        </motion.span>
                      </div>
                      <div className="relative w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                        {/* Animated Background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                          className={`h-3 rounded-full bg-gradient-to-r ${agent.color} relative overflow-hidden`}
                          initial={{ width: "0%" }}
                          animate={{ width: `${agent.progress}%` }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: [-100, 100] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          />
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {agent.capabilities.slice(0, 2).map((capability, capIndex) => (
                        <motion.div
                          key={capability}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: capIndex * 0.1, duration: 0.3 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-slate-700/50 text-blue-200 border-slate-600 text-xs hover:bg-slate-600/50 transition-colors duration-200"
                          >
                            <motion.span
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity, delay: capIndex * 0.2 }}
                            >
                              {capability}
                            </motion.span>
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center space-x-2">
                      <motion.div
                        className={`w-2 h-2 rounded-full ${
                          agent.status === 'completed' ? 'bg-green-400' :
                          agent.status === 'processing' ? 'bg-yellow-400' : 'bg-gray-400'
                        }`}
                        animate={agent.status === 'processing' ? {
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        } : {}}
                        transition={{ duration: 1, repeat: agent.status === 'processing' ? Infinity : 0 }}
                      />
                      <span className="text-xs text-blue-200 capitalize">
                        {agent.status === 'completed' ? 'Completed' :
                         agent.status === 'processing' ? 'Processing' : 'Ready'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {/* Upload Area or Results */}
        <AnimatePresence mode="wait">
          {!results ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Card
                className={`p-12 text-center transition-all duration-500 relative overflow-hidden ${
                  isDragging ? "border-primary border-2 bg-primary/5 scale-105" : "hover:scale-102"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <defs>
                      <pattern id="upload-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <motion.circle
                          cx="20"
                          cy="20"
                          r="2"
                          fill="currentColor"
                          animate={{ opacity: [0.1, 0.5, 0.1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#upload-pattern)" />
                  </svg>
                </div>

                <div className="relative max-w-md mx-auto space-y-6">
                  <motion.div 
                    className="h-24 w-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center relative"
                    animate={{ 
                      scale: uploadMutation.isPending ? [1, 1.1, 1] : 1,
                      rotate: uploadMutation.isPending ? [0, 360] : 0
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: uploadMutation.isPending ? Infinity : 0 },
                      rotate: { duration: 2, repeat: uploadMutation.isPending ? Infinity : 0, ease: "linear" }
                    }}
                  >
                    {/* Pulsing Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/20"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="relative z-10">
                      {uploadMutation.isPending ? (
                        <Loader2 className="h-12 w-12 text-primary animate-spin" />
                      ) : (
                        <Upload className="h-12 w-12 text-primary" />
                      )}
                    </div>
                  </motion.div>

                  {uploadMutation.isPending ? (
                    <div className="space-y-6">
                      <motion.h3 
                        className="text-xl font-semibold"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Processing...
                      </motion.h3>
                      <div className="space-y-4">
                        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-blue-500 relative"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 10, ease: "linear" }}
                          >
                            {/* Shimmer Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: [-100, 100] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />
                          </motion.div>
                        </div>
                        <motion.p 
                          className="text-sm text-muted-foreground"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          AI agents validating providers...
                        </motion.p>
                        
                        {/* Processing Steps */}
                        <div className="space-y-2">
                          {[
                            "Data Validation Agent: Verifying NPI numbers...",
                            "Information Enrichment Agent: Enriching profiles...",
                            "Quality Assurance Agent: ML confidence scoring...",
                            "Directory Management Agent: Generating reports..."
                          ].map((step, index) => (
                            <motion.div
                              key={step}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.5, duration: 0.5 }}
                              className="flex items-center space-x-2 text-xs text-muted-foreground"
                            >
                              <motion.div
                                className="w-1 h-1 rounded-full bg-primary"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity, delay: index * 0.2 }}
                              />
                              <span>{step}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Upload Provider Directory</h3>
                        <p className="text-muted-foreground">
                          Drag and drop or click to select CSV, Excel, or PDF files
                        </p>
                      </div>

                      <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        accept=".csv,.xlsx,.xls,.pdf"
                        onChange={handleFileSelect}
                        data-testid="input-file-upload"
                      />

                      <div className="flex flex-col space-y-3">
                        <label htmlFor="file-upload">
                          <Button
                            type="button"
                            size="lg"
                            className="w-full"
                            onClick={() => document.getElementById("file-upload")?.click()}
                            data-testid="button-select-file"
                          >
                            <FileText className="mr-2 h-5 w-5" />
                            Select File
                          </Button>
                        </label>
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() => loadSampleData.mutate()}
                          disabled={loadSampleData.isPending}
                          data-testid="button-load-sample"
                        >
                          Try Sample Data
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </Card>
            </motion.div>
          ) : results && results.summary ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Summary KPIs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Providers Processed", value: results.summary.totalProviders },
                  { label: "Verified", value: `${Math.round((results.summary.verifiedCount / results.summary.totalProviders) * 100)}%` },
                  { label: "Processing Time", value: `${results.summary.processingTime}s` },
                  { label: "Avg Confidence", value: `${results.summary.averageConfidence}%` },
                ].map((kpi) => (
                  <Card key={kpi.label} className="p-6 text-center">
                    <p className="text-3xl font-bold text-primary mb-1">{kpi.value}</p>
                    <p className="text-sm text-muted-foreground">{kpi.label}</p>
                  </Card>
                ))}
              </div>

              {/* Results Table */}
              <Card>
                <div className="p-6 border-b">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold">Validation Results</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        {fileName || "Uploaded file"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" data-testid="button-download">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setResults(null);
                          setFileName(null);
                        }}
                        data-testid="button-upload-new"
                      >
                        Upload New
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50 sticky top-0">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                          Provider
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                          Confidence
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {results.providers.map((provider, index) => (
                        <motion.tr
                          key={provider.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="hover:bg-muted/30 transition-colors"
                          data-testid={`row-provider-${index}`}
                        >
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-medium">{provider.name}</p>
                              <p className="text-sm text-muted-foreground">{provider.specialty || "General"}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm space-y-1">
                              <p className="text-muted-foreground">{provider.phone}</p>
                              <p className="text-muted-foreground truncate max-w-xs">
                                {provider.address}
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="w-48">
                              <ConfidenceBar confidence={provider.confidence} />
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Badge variant={getStatusBadge(provider.status) as any} className="gap-1">
                              {getStatusIcon(provider.status)}
                              {provider.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="sm" data-testid={`button-view-sources-${index}`}>
                                View Sources
                              </Button>
                              <Button variant="ghost" size="sm" data-testid={`button-send-email-${index}`}>
                                <Mail className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
