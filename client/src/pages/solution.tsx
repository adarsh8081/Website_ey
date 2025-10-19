import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Bot, 
  Database, 
  Brain, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Shield,
  Target,
  Eye,
  TrendingUp,
  Zap,
  Award,
  Clock,
  Users,
  FileText,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConfidenceBar } from "@/components/confidence-bar";

export default function Solution() {
  const agents = [
    {
      icon: <Shield className="h-10 w-10" />,
      name: "Data Validation Agent",
      description: "Validates NPI numbers, phone numbers, emails, and addresses via NPI Registry API, Google Maps API, and web scraping",
      capabilities: ["NPI Registry API", "Google Maps API", "Web Scraping", "GPT-4o Vision PDF Extraction"],
      whyItMatters: "Ensures regulatory compliance and catches basic data errors instantly with 85%+ accuracy",
      color: "from-blue-500 to-cyan-500",
      highlight: "85%+ PDF accuracy"
    },
    {
      icon: <Brain className="h-10 w-10" />,
      name: "Information Enrichment Agent",
      description: "Enriches provider profiles with public data and uses Prophet forecasting to predict when data will decay",
      capabilities: ["Web Scraping", "Prophet Forecasting", "Data Enrichment", "Decay Prediction"],
      whyItMatters: "Proactively flags providers before data becomes stale, enabling proactive revalidation",
      color: "from-purple-500 to-pink-500",
      highlight: "Predictive Analytics"
    },
    {
      icon: <Target className="h-10 w-10" />,
      name: "Quality Assurance Agent",
      description: "Uses Random Forest ML to score confidence, cross-validate data, and achieve 97% automation rate",
      capabilities: ["Random Forest ML", "Cross-validation", "Fraud Detection", "Quality Metrics"],
      whyItMatters: "Achieves 97% automation rate with minimal manual review needed",
      color: "from-green-500 to-emerald-500",
      highlight: "97% Automation"
    },
    {
      icon: <Database className="h-10 w-10" />,
      name: "Directory Management Agent",
      description: "Generates reports, alerts, and manages workflow queues for manual review with comprehensive reporting",
      capabilities: ["Report Generation", "Workflow Queues", "Alert Management", "Export Functions"],
      whyItMatters: "Streamlines manual review process and provides actionable insights for directory management",
      color: "from-orange-500 to-red-500",
      highlight: "Smart Workflow"
    },
  ];

  const keyMetrics = [
    { value: 120, suffix: "×", label: "Faster Processing", icon: <Zap className="h-6 w-6" />, color: "text-blue-500" },
    { value: 87, suffix: "%", label: "Accuracy Rate", icon: <Target className="h-6 w-6" />, color: "text-green-500" },
    { value: 97, suffix: "%", label: "Automation Rate", icon: <Bot className="h-6 w-6" />, color: "text-purple-500" },
    { value: 720, suffix: "+", label: "Providers/Hour", icon: <Clock className="h-6 w-6" />, color: "text-orange-500" },
  ];

  const uniqueFeatures = [
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Predictive Data Decay",
      description: "Prophet forecasting predicts when provider data will become outdated, enabling proactive revalidation scheduling",
      highlight: "UNIQUE FEATURE",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "ML Confidence Scoring", 
      description: "Random Forest classifier analyzes multiple features to achieve 97% automation rate with minimal manual review",
      highlight: "ADVANCED ML",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Eye className="h-12 w-12" />,
      title: "VLM PDF Extraction",
      description: "GPT-4o Vision extracts data from scanned documents, handwritten forms, and poor quality images with 85%+ accuracy",
      highlight: "STATE-OF-THE-ART",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 dark:bg-gradient-to-br dark:from-background dark:via-background-secondary dark:to-primary/20 py-20 lg:py-32 transition-all duration-300">
        {/* Background AI Technology Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&crop=center" 
            alt="AI Technology Solution"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-success/10 text-success rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="inline h-4 w-4 mr-1" />
              AI-Powered Solution
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground dark:text-heading">
              EY Techathon 2024:{" "}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent dark:from-accent-blue dark:to-accent-cyan">
                AI-Powered Solution
              </span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-paragraph max-w-3xl mx-auto leading-relaxed">
              Our 4 intelligent AI agents validate 200+ healthcare providers in <span className="font-semibold text-foreground dark:text-heading">under 10 minutes</span> with 
              <span className="font-semibold text-foreground dark:text-heading"> 87% accuracy</span> — <span className="font-semibold text-foreground dark:text-heading">120× faster</span> than manual processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background AI Visualization */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&crop=center" 
            alt="AI Agents Working"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-heading">Meet Our AI Agents</h2>
            <p className="text-lg text-muted-foreground dark:text-paragraph">
              Each agent specializes in a specific validation task, working in parallel for maximum efficiency
            </p>
          </motion.div>

          {/* AI Agents Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative max-w-5xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=500&fit=crop&crop=center" 
                alt="AI Agents Processing Data"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">4 AI Agents Working in Parallel</h3>
                <p className="text-blue-200">Real-time provider data validation and enrichment</p>
              </div>
            </div>
          </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={`bg-gradient-to-r ${agent.color} text-white border-0 text-xs font-bold`}>
                    {agent.highlight}
                  </Badge>
                </div>

                <div className="space-y-6">
                  {/* Agent Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${agent.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {agent.icon}
                  </div>

                  {/* Agent Name */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {agent.name}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-200 leading-relaxed text-lg">
                    {agent.description}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wide">Capabilities</h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.capabilities.map((capability) => (
                        <Badge
                          key={capability}
                          variant="secondary"
                          className="bg-slate-700/50 text-blue-200 border-slate-600 text-xs"
                        >
                          {capability}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Why It Matters */}
                  <div className="pt-4 border-t border-slate-600">
                    <p className="text-sm font-semibold mb-2 text-blue-300">Why It Matters</p>
                    <p className="text-sm text-blue-200">{agent.whyItMatters}</p>
                  </div>

                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${agent.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Proven Results
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our AI-powered solution delivers measurable improvements in speed, accuracy, and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
                  <div className={`${metric.color} mb-4 flex justify-center`}>
                    {metric.icon}
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                    {metric.value}{metric.suffix}
                  </p>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium">
                    {metric.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid md:grid-cols-3 gap-12">
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

      {/* System Architecture */}
      <section className="py-24 bg-muted/30 dark:bg-muted/20 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-heading">How It All Works Together</h2>
            <p className="text-lg text-muted-foreground dark:text-paragraph">
              A simple, powerful workflow that delivers results in minutes
            </p>
          </motion.div>

          <Card className="p-12 transition-all duration-300">
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { 
                  label: "Upload Data", 
                  desc: "CSV/Excel/PDF/Images", 
                  color: "bg-blue-500",
                  icon: <FileText className="h-8 w-8" />
                },
                { 
                  label: "AI Processing", 
                  desc: "4 agents in parallel", 
                  color: "bg-purple-500",
                  icon: <Bot className="h-8 w-8" />
                },
                { 
                  label: "External APIs", 
                  desc: "NPI, Google Maps, Web", 
                  color: "bg-green-500",
                  icon: <Search className="h-8 w-8" />
                },
                { 
                  label: "ML Analysis", 
                  desc: "Confidence scoring", 
                  color: "bg-orange-500",
                  icon: <BarChart3 className="h-8 w-8" />
                },
                { 
                  label: "Results", 
                  desc: "87% accuracy, 97% auto", 
                  color: "bg-red-500",
                  icon: <CheckCircle2 className="h-8 w-8" />
                },
              ].map((step, index) => (
                <div key={step.label} className="relative">
                  <div className="text-center">
                    <div className={`h-24 ${step.color} rounded-lg flex flex-col items-center justify-center mb-3 text-white font-semibold`}>
                      <div className="mb-2">{step.icon}</div>
                      <div className="text-sm">{step.label}</div>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-subheading">{step.desc}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-heading">
                Confidence Scoring Explained
              </h2>
              <p className="text-lg text-muted-foreground dark:text-paragraph leading-relaxed">
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
                    <span className="text-muted-foreground dark:text-paragraph">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <p className="text-sm font-mono text-muted-foreground dark:text-subheading mb-2">
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
            <Card className="p-8 transition-all duration-300">
              <h3 className="font-semibold mb-6 text-foreground dark:text-heading">Sample Confidence Scores</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-medium mb-2 text-foreground dark:text-heading">Dr. Sarah Johnson - Cardiology</p>
                  <ConfidenceBar confidence={92} />
                  <p className="text-xs text-muted-foreground dark:text-subheading mt-2">
                    All sources verified, active NPI, recent update
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-2 text-foreground dark:text-heading">Metro Urgent Care Center</p>
                  <ConfidenceBar confidence={68} />
                  <p className="text-xs text-muted-foreground dark:text-subheading mt-2">
                    Phone unverified, address matches, NPI active
                  </p>
                </div>
                <div>
                  <p className="font-medium mb-2 text-foreground dark:text-heading">Dr. Michael Chen - Pediatrics</p>
                  <ConfidenceBar confidence={34} />
                  <p className="text-xs text-muted-foreground dark:text-subheading mt-2">
                    Multiple mismatches, phone disconnected, old data
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 dark:from-primary/20 dark:via-chart-2/20 dark:to-primary/20 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground dark:text-heading">
                See It in Action
              </h2>
              <p className="text-lg text-muted-foreground dark:text-paragraph mb-8 leading-relaxed">
                Upload a sample provider list and watch our AI agents validate it in real-time. 
                See confidence scores, flagged providers, and automated verification emails — 
                all within minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button size="lg" className="btn-primary-glow transition-all duration-300" data-testid="button-try-demo">
                    Try Interactive Demo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="dark:btn-secondary-transparent transition-all duration-300" data-testid="button-schedule-demo">
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
              <Card className="p-8 transition-all duration-300">
                <h3 className="font-semibold mb-6 text-foreground dark:text-heading">What You'll Experience</h3>
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
                      <p className="text-muted-foreground dark:text-paragraph">{feature}</p>
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
