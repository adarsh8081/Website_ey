import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, CheckCircle2, AlertTriangle, Mail, Download, Loader2 } from "lucide-react";
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

export default function Demo() {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [results, setResults] = useState<DemoResult | null>(null);
  const { toast } = useToast();

  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return apiRequest<DemoResult>("POST", "/api/demo/upload", formData);
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

  const loadSampleData = useMutation({
    mutationFn: async () => {
      return apiRequest<DemoResult>("POST", "/api/demo/sample", {});
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
                className={`p-12 text-center transition-all ${
                  isDragging ? "border-primary border-2 bg-primary/5" : ""
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="max-w-md mx-auto space-y-6">
                  <div className="h-24 w-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    {uploadMutation.isPending ? (
                      <Loader2 className="h-12 w-12 text-primary animate-spin" />
                    ) : (
                      <Upload className="h-12 w-12 text-primary" />
                    )}
                  </div>

                  {uploadMutation.isPending ? (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Processing...</h3>
                      <div className="space-y-2">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 10, ease: "linear" }}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          AI agents validating providers...
                        </p>
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
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
