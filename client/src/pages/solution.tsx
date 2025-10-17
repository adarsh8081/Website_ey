import { motion } from "framer-motion";
import { Link } from "wouter";
import { Bot, Database, Brain, Search, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ConfidenceBar } from "@/components/confidence-bar";

export default function Solution() {
  const agents = [
    {
      icon: <Search className="h-10 w-10" />,
      name: "NPI Validation Agent",
      description: "Cross-references provider details against the National Provider Identifier Registry in real-time",
      whyItMatters: "Ensures regulatory compliance and catches basic data errors instantly",
      color: "text-primary",
    },
    {
      icon: <Database className="h-10 w-10" />,
      name: "Network Verification Agent",
      description: "Validates insurance network participation and coverage status across multiple payers",
      whyItMatters: "Prevents claim denials and patient surprise billing",
      color: "text-chart-2",
    },
    {
      icon: <Brain className="h-10 w-10" />,
      name: "Data Decay Predictor",
      description: "Machine learning model predicts when provider information is likely to become outdated",
      whyItMatters: "Proactively flags providers before data becomes stale",
      color: "text-success",
    },
    {
      icon: <Bot className="h-10 w-10" />,
      name: "VLM PDF Extractor",
      description: "Vision Language Model extracts provider details from contracts, PDFs, and scanned documents",
      whyItMatters: "Automates data entry from unstructured sources with 95% accuracy",
      color: "text-warning",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-success/10 text-success rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="inline h-4 w-4 mr-1" />
              AI-Powered Solution
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Four AI Agents,{" "}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                One Mission
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              MedIntel.AI deploys specialized AI agents that work together to validate provider directories 
              with <span className="font-semibold text-foreground">87% accuracy</span> at <span className="font-semibold text-foreground">50x the speed</span> of 
              manual verification — transforming hours of work into minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our AI Agents</h2>
          <p className="text-lg text-muted-foreground">
            Each agent specializes in a specific validation task, working in parallel for maximum efficiency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover-elevate">
                <div className={`${agent.color} mb-6`}>{agent.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{agent.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{agent.description}</p>
                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold mb-2">Why It Matters</p>
                  <p className="text-sm text-muted-foreground">{agent.whyItMatters}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It All Works Together</h2>
            <p className="text-lg text-muted-foreground">
              A simple, powerful workflow that delivers results in minutes
            </p>
          </motion.div>

          <Card className="p-12">
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { label: "Your Data", desc: "CSV/Excel/PDF", color: "bg-muted" },
                { label: "AI Agents", desc: "4 parallel validators", color: "bg-primary" },
                { label: "External Sources", desc: "NPI, Maps, Networks", color: "bg-chart-2" },
                { label: "Confidence Scoring", desc: "ML-powered analysis", color: "bg-success" },
                { label: "Validated Data", desc: "Clean, accurate results", color: "bg-chart-1" },
              ].map((step, index) => (
                <div key={step.label} className="relative">
                  <div className="text-center">
                    <div className={`h-24 ${step.color} rounded-lg flex items-center justify-center mb-3 text-primary-foreground font-semibold`}>
                      {step.label}
                    </div>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-12 -right-2 transform translate-x-1/2">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Confidence Scoring */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Confidence Scoring Explained
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every validated provider receives a confidence score (0-100) based on multiple factors:
              </p>
              <ul className="space-y-3">
                {[
                  "NPI Registry match quality",
                  "Phone number verification status",
                  "Address accuracy from Google Maps",
                  "Insurance network confirmation",
                  "Data freshness and last update",
                  "Cross-source consistency score",
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <p className="text-sm font-mono text-muted-foreground mb-2">
                  Score = Σ(factor_weight × verification_status) / total_weight
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="font-semibold mb-6">Sample Confidence Scores</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-medium mb-2">Dr. Sarah Johnson - Cardiology</p>
                  <ConfidenceBar confidence={92} />
                  <p className="text-xs text-muted-foreground mt-2">
                    All sources verified, active NPI, recent update
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-2">Metro Urgent Care Center</p>
                  <ConfidenceBar confidence={68} />
                  <p className="text-xs text-muted-foreground mt-2">
                    Phone unverified, address matches, NPI active
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-2">Dr. Michael Chen - Pediatrics</p>
                  <ConfidenceBar confidence={34} />
                  <p className="text-xs text-muted-foreground mt-2">
                    Multiple mismatches, phone disconnected, old data
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                See It in Action
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Upload a sample provider list and watch our AI agents validate it in real-time. 
                See confidence scores, flagged providers, and automated verification emails — 
                all within minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button size="lg" data-testid="button-try-demo">
                    Try Interactive Demo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" data-testid="button-schedule-demo">
                    Schedule Live Demo
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="font-semibold mb-6">What You'll Experience</h3>
                <div className="space-y-4">
                  {[
                    "Upload CSV, Excel, or PDF provider lists",
                    "Watch AI agents validate in real-time",
                    "Review confidence scores and status",
                    "Generate verification emails automatically",
                    "Export clean, validated data",
                  ].map((feature, index) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
