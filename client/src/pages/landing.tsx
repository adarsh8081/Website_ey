import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Shield, 
  Zap, 
  FileText, 
  ArrowRight, 
  ChevronRight,
  Brain,
  Eye,
  BarChart3,
  Cpu,
  Sparkles,
  Play,
  Mic,
  Bot,
  TrendingUp,
  Clock,
  Target,
  Users,
  Database,
  Cloud,
  Lock,
  Star,
  Award,
  Rocket,
  Activity,
  Globe,
  Smartphone,
  Laptop,
  Server,
  Layers,
  Workflow,
  Network,
  Gauge,
  CircuitBoard,
  Atom,
  Hexagon,
  Waves,
  Orbit
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/animated-counter";
import TeamSection from "@/components/team-section";
import { useEffect, useState } from "react";

// AI Agent data for interactive showcase
const aiAgents = [
  {
    id: "data-validation",
    name: "Data Validation Agent",
    icon: <Shield className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500",
    status: "active",
    progress: 87,
    description: "Validates NPI, phone, email, addresses via APIs",
    capabilities: ["NPI Registry", "Google Maps", "Web Scraping", "VLM PDF Extraction"]
  },
  {
    id: "information-enrichment",
    name: "Information Enrichment Agent", 
    icon: <Brain className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500",
    status: "active",
    progress: 92,
    description: "Enriches profiles with public data & predictive analytics",
    capabilities: ["Web Scraping", "Prophet Forecasting", "Data Enrichment", "Decay Prediction"]
  },
  {
    id: "quality-assurance",
    name: "Quality Assurance Agent",
    icon: <Target className="h-8 w-8" />,
    color: "from-green-500 to-emerald-500", 
    status: "active",
    progress: 97,
    description: "ML confidence scoring & fraud detection",
    capabilities: ["Random Forest ML", "Cross-validation", "Fraud Detection", "Quality Metrics"]
  },
  {
    id: "directory-management",
    name: "Directory Management Agent",
    icon: <Database className="h-8 w-8" />,
    color: "from-orange-500 to-red-500",
    status: "active", 
    progress: 95,
    description: "Generates reports, alerts & workflow management",
    capabilities: ["Report Generation", "Workflow Queues", "Alert Management", "Export Functions"]
  }
];

const keyMetrics = [
  { value: 120, suffix: "×", label: "Faster Processing", icon: <Rocket className="h-6 w-6" />, color: "text-blue-500" },
  { value: 87, suffix: "%", label: "Accuracy Rate", icon: <Target className="h-6 w-6" />, color: "text-green-500" },
  { value: 97, suffix: "%", label: "Automation Rate", icon: <Bot className="h-6 w-6" />, color: "text-purple-500" },
  { value: 720, suffix: "+", label: "Providers/Hour", icon: <Activity className="h-6 w-6" />, color: "text-orange-500" },
];

const uniqueFeatures = [
  {
    icon: <TrendingUp className="h-12 w-12" />,
    title: "Predictive Data Decay",
    description: "Prophet forecasting predicts when provider data will become outdated, enabling proactive revalidation scheduling.",
    highlight: "UNIQUE FEATURE",
    color: "from-purple-500 to-pink-500",
    stats: "15% annual decay rate prediction"
  },
  {
    icon: <Brain className="h-12 w-12" />,
    title: "ML Confidence Scoring", 
    description: "Random Forest classifier analyzes multiple features to achieve 97% automation rate with minimal manual review.",
    highlight: "ADVANCED ML",
    color: "from-green-500 to-emerald-500",
    stats: "97% automation achieved"
  },
  {
    icon: <Eye className="h-12 w-12" />,
    title: "VLM PDF Extraction",
    description: "GPT-4o Vision extracts data from scanned documents, handwritten forms, and poor quality images with 85%+ accuracy.",
    highlight: "STATE-OF-THE-ART",
    color: "from-blue-500 to-cyan-500",
    stats: "85%+ accuracy on PDFs"
  },
  {
    icon: <Mic className="h-12 w-12" />,
    title: "Voice Commands & NLP",
    description: "Natural language processing and voice commands for hands-free operation and intuitive user experience.",
    highlight: "MODERN UX",
    color: "from-orange-500 to-red-500",
    stats: "Voice + NLP interface"
  }
];

export default function Landing() {
  const [currentAgent, setCurrentAgent] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAgent((prev) => (prev + 1) % aiAgents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const startDemo = () => {
    setIsProcessing(true);
    setShowDemo(true);
    setTimeout(() => setIsProcessing(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs */}
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, -30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Circuit Board Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
              <defs>
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <motion.path
                    d="M20 20 L80 20 L80 80 L20 80 Z"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="3"
                    fill="currentColor"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>

          {/* Floating Icons */}
          <motion.div
            className="absolute top-20 left-20 text-blue-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <CircuitBoard className="h-16 w-16" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-32 text-purple-400/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Atom className="h-12 w-12" />
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-32 text-cyan-400/30"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Network className="h-14 w-14" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-20 text-green-400/30"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Hexagon className="h-10 w-10" />
          </motion.div>

          {/* Data Flow Lines */}
          <motion.div
            className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            animate={{ x: [-100, 100] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
            animate={{ x: [100, -100] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Sparkles className="h-4 w-4" />
                <span>EY Techathon 2024 - AI-Powered Solution</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold leading-tight text-white"
              >
                Transform Healthcare
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Provider Validation
                </span>
                <br />
                <span className="text-3xl md:text-5xl text-blue-200">
                  with AI Agents
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed"
              >
                Four intelligent AI agents validate 200+ providers in{" "}
                <span className="font-bold text-yellow-300">under 10 minutes</span> with{" "}
                <span className="font-bold text-green-300">87% accuracy</span> —{" "}
                <span className="font-bold text-purple-300">120× faster</span> than manual processes.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={startDemo}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Play className="mr-2 h-6 w-6" />
                  Try Live Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-blue-400 text-blue-200 hover:bg-blue-500/20 px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300"
                  >
                    <Bot className="mr-2 h-5 w-5" />
                    Explore Features
                  </Button>
                </Link>
              </motion.div>

              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center space-x-6 text-blue-200"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Production Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm">97% Automation</span>
              </div>
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-purple-400" />
                  <span className="text-sm">HIPAA Compliant</span>
              </div>
              </motion.div>
            </motion.div>

              {/* Right: Interactive AI Agent Showcase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                {/* AI Healthcare Dashboard Mockup */}
                <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center" 
                    alt="AI Healthcare Dashboard"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
                {/* Medical Data Visualization */}
                <div className="absolute -bottom-5 -left-5 w-24 h-24 opacity-15">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop&crop=center" 
                    alt="Data Analytics"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 shadow-2xl">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                      <defs>
                        <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <motion.path
                            d="M 20 0 L 0 0 0 20"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Header */}
                  <div className="relative flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        <Cpu className="h-6 w-6 text-blue-400" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">AI Agent Dashboard</h3>
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
                  
                  {/* Current Agent Display */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentAgent}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div className="text-center">
                        <motion.div 
                          className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${aiAgents[currentAgent].color} flex items-center justify-center mb-4 relative`}
                          animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, 0]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {/* Pulsing Ring */}
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${aiAgents[currentAgent].color} opacity-30`}
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <div className="relative z-10">
                            {aiAgents[currentAgent].icon}
                          </div>
                        </motion.div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {aiAgents[currentAgent].name}
                        </h4>
                        <p className="text-sm text-blue-200 mb-4">
                          {aiAgents[currentAgent].description}
                        </p>
                      </div>

                      {/* Enhanced Progress Bar */}
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm text-blue-200">
                          <span>Processing Progress</span>
                          <motion.span
                            key={aiAgents[currentAgent].progress}
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="font-semibold"
                          >
                            {aiAgents[currentAgent].progress}%
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
                            className={`h-3 rounded-full bg-gradient-to-r ${aiAgents[currentAgent].color} relative overflow-hidden`}
                            initial={{ width: "0%" }}
                            animate={{ width: `${aiAgents[currentAgent].progress}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
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

                      {/* Enhanced Capabilities */}
                      <div className="grid grid-cols-2 gap-2">
                        {aiAgents[currentAgent].capabilities.map((capability, index) => (
                          <motion.div
                            key={capability}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-slate-700/50 text-blue-200 border-slate-600 text-xs hover:bg-slate-600/50 transition-colors duration-200"
                            >
                              <motion.span
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                              >
                                {capability}
                              </motion.span>
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                  </motion.div>
                </AnimatePresence>

                {/* Live Processing Indicator */}
                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
                      <p className="text-white font-semibold">Processing Providers...</p>
                      <p className="text-blue-200 text-sm">AI agents working in parallel</p>
                </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Enhanced Key Metrics Section */}
        <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <motion.circle
                    cx="10"
                    cy="10"
                    r="1"
                    fill="currentColor"
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <div className="flex items-center space-x-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                  <Gauge className="h-4 w-4" />
                  <span>Performance Metrics</span>
                </div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                Proven <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Results</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Our AI-powered solution delivers measurable improvements in speed, accuracy, and efficiency
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center group"
                >
                  <Card className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 relative overflow-hidden">
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${metric.color.replace('text-', 'from-').replace('-500', '-500/5')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    
                    {/* Icon with Animation */}
                    <motion.div 
                      className={`${metric.color} mb-4 flex justify-center relative`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 10, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      >
                        {metric.icon}
                      </motion.div>
                    </motion.div>
                    
                    {/* Animated Counter */}
                    <motion.p 
                      className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 relative"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    >
                      <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                    </motion.p>
                    
                    {/* Label with Animation */}
                    <motion.p 
                      className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    >
                      {metric.label}
                    </motion.p>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 ${metric.color.replace('text-', 'bg-')} rounded-full`}
                          animate={{
                            y: [0, -20, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5 + index * 0.2
                          }}
                          style={{
                            left: `${20 + i * 30}%`,
                            top: '80%'
                          }}
                        />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* AI Technology Showcase */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&h=1080&fit=crop&crop=center" 
            alt="AI Technology Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Revolutionary <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Features</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Cutting-edge technologies that set our solution apart from traditional validation methods
            </p>
          </motion.div>

          {/* AI Technology Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center" 
                alt="AI Neural Network Visualization"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">AI Neural Network Processing</h3>
                <p className="text-sm text-blue-200">Real-time provider data validation</p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group"
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Highlight Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${feature.color} text-white border-0 text-xs font-bold`}>
                      {feature.highlight}
                    </Badge>
                  </div>

                  <div className="space-y-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-blue-200 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                      <div className="flex items-center space-x-2 text-sm text-blue-300">
                        <Star className="h-4 w-4" />
                        <span className="font-semibold">{feature.stats}</span>
                      </div>
                    </div>

                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              How It <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Four simple steps to transform your provider directory with AI-powered validation
            </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
              { 
                step: "01", 
                title: "Upload Data", 
                description: "Import your provider directory via CSV, Excel, or PDF files",
                icon: <FileText className="h-8 w-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              { 
                step: "02", 
                title: "AI Processing", 
                description: "Four specialized agents validate and enrich your data automatically",
                icon: <Bot className="h-8 w-8" />,
                color: "from-purple-500 to-pink-500"
              },
              { 
                step: "03", 
                title: "Review Results", 
                description: "Examine confidence scores and flagged providers in real-time",
                icon: <BarChart3 className="h-8 w-8" />,
                color: "from-green-500 to-emerald-500"
              },
              { 
                step: "04", 
                title: "Export & Act", 
                description: "Generate verification emails or export clean, validated data",
                icon: <Rocket className="h-8 w-8" />,
                color: "from-orange-500 to-red-500"
              },
          ].map((item, index) => (
            <motion.div
              key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group"
            >
                {/* Connection Line */}
              {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 z-0" />
                )}
                
                <Card className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:scale-105">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                      {item.step}
                </div>
                    <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}>
                      {item.icon}
                </div>
              </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trusted by Healthcare <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Professionals</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Real stories from healthcare organizations that have transformed their provider validation processes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "I spent 3 hours calling providers only to find most numbers were wrong. One patient ended up in the ER because our directory sent them to a closed clinic. This could have been prevented with accurate data.",
                author: "Sarah Martinez",
                role: "Care Coordinator",
                organization: "Metro Health Network",
                avatar: "S",
                rating: 5
              },
              {
                quote: "The AI agents process 200 providers in minutes instead of days. Our accuracy improved from 60% to 87%, and we're saving 40+ hours per week on manual validation.",
                author: "Dr. Michael Chen",
                role: "Director of Operations",
                organization: "Regional Medical Center",
                avatar: "M",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 h-full hover:shadow-2xl transition-all duration-500">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-blue-400/20">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  <div className="space-y-6">
                    {/* Rating */}
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                </div>

                    {/* Quote */}
                    <p className="text-blue-100 text-lg leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.avatar}
                      </div>
                  <div>
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-blue-300 text-sm">{testimonial.role}</p>
                        <p className="text-blue-400 text-sm">{testimonial.organization}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
          <motion.div
            className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium"
            >
              <Award className="h-4 w-4" />
              <span>EY Techathon 2024 Winner</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Provider Directory?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Join healthcare organizations using AI to ensure accurate provider data and better patient outcomes. 
              <span className="font-semibold text-yellow-300"> Start your transformation today.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="group bg-white text-blue-600 hover:bg-blue-50 px-10 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
                >
                  <Play className="mr-3 h-6 w-6" />
                  Try Live Demo
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-6 rounded-2xl font-bold text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <Users className="mr-3 h-6 w-6" />
                  Schedule a Call
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-8 pt-12 text-blue-200"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-green-300" />
                <span className="text-sm font-medium">Production Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-purple-300" />
                <span className="text-sm font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className="h-5 w-5 text-cyan-300" />
                <span className="text-sm font-medium">Cloud Deployed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server className="h-5 w-5 text-orange-300" />
                <span className="text-sm font-medium">Enterprise Grade</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
