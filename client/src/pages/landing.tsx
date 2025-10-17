import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Zap, FileText, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/animated-counter";
import { useEffect, useState } from "react";

const dashboardMetrics = [
  { label: "Validated Providers", value: "847", color: "text-success" },
  { label: "Confidence Score", value: "89%", color: "text-primary" },
  { label: "Time Saved", value: "42h", color: "text-chart-2" },
];

export default function Landing() {
  const [currentMetric, setCurrentMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % dashboardMetrics.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 -right-20 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-hero-mobile md:text-hero font-extrabold mb-6 leading-tight">
                Healthcare Directory Ka{" "}
                <span className="text-primary">Nightmare</span> —<br />
                <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  Solved with AI
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                Automated provider validation that transforms inaccurate directories into reliable, 
                compliant data sources — saving lives and costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/demo">
                  <Button size="lg" className="w-full sm:w-auto" data-testid="button-see-demo">
                    See Demo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto backdrop-blur-sm" data-testid="button-contact-us">
                    Get Started
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span>Validated 200+ providers in under 10 minutes — 87% accuracy</span>
              </div>
            </motion.div>

            {/* Right: Animated Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-card via-card to-primary/5 p-8 shadow-2xl border-2">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Validation Dashboard</h3>
                    <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  </div>
                  
                  <motion.div
                    key={currentMetric}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        {dashboardMetrics[currentMetric].label}
                      </p>
                      <p className={`text-5xl font-bold ${dashboardMetrics[currentMetric].color}`}>
                        {dashboardMetrics[currentMetric].value}
                      </p>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    {["Active", "Flagged", "Pending"].map((status, i) => (
                      <div key={status} className="text-center">
                        <p className="text-2xl font-bold">{[234, 12, 45][i]}</p>
                        <p className="text-xs text-muted-foreground">{status}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Pitch */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl leading-relaxed text-foreground"
          >
            Healthcare organizations waste <span className="font-bold text-primary">hundreds of hours</span> manually 
            verifying provider information. Our AI agents automate validation, predict data decay, and extract 
            information from PDFs — delivering <span className="font-bold text-success">87% accuracy</span> at 
            <span className="font-bold text-chart-2"> 50x the speed</span>.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by AI Agents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four specialized AI agents work together to ensure your provider directory is accurate and up-to-date
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="h-10 w-10" />,
              title: "Automated Validation",
              description: "Cross-reference provider data against NPI Registry, Google Maps, and insurance networks in real-time",
              color: "text-primary",
            },
            {
              icon: <Zap className="h-10 w-10" />,
              title: "Predictive Data Decay",
              description: "Machine learning predicts when provider information is likely to become outdated, preventing issues before they occur",
              color: "text-chart-2",
            },
            {
              icon: <FileText className="h-10 w-10" />,
              title: "VLM PDF Extraction",
              description: "Vision Language Models extract provider details from contracts and documents with human-level accuracy",
              color: "text-success",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover-elevate">
                <div className={`${feature.color} mb-6`}>{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* KPI Strip */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 200, suffix: "+", label: "Providers/Hour" },
              { value: 87, suffix: "%", label: "Accuracy Rate" },
              { value: 75, suffix: "%", label: "Cost Saved" },
              { value: 95, suffix: "%", label: "Automation Rate" },
            ].map((kpi) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary">
                  <AnimatedCounter end={kpi.value} suffix={kpi.suffix} />
                </p>
                <p className="text-sm md:text-base text-muted-foreground font-medium">{kpi.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Four simple steps to validated provider data</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Upload", description: "Import your provider directory via CSV, Excel, or PDF" },
            { step: "02", title: "Validate", description: "AI agents cross-reference multiple data sources automatically" },
            { step: "03", title: "Review", description: "Review confidence scores and flagged providers in seconds" },
            { step: "04", title: "Act", description: "Generate verification emails or export clean data instantly" },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-full w-full">
                  <ArrowRight className="h-6 w-6 text-muted-foreground/30 mx-auto" />
                </div>
              )}
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                    S
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-lg md:text-xl italic text-foreground leading-relaxed">
                    "I spent 3 hours calling providers only to find most numbers were wrong. One patient 
                    ended up in the ER because our directory sent them to a closed clinic. This could have 
                    been prevented."
                  </p>
                  <div>
                    <p className="font-semibold">Sarah Martinez</p>
                    <p className="text-sm text-muted-foreground">Care Coordinator, Metro Health Network</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-chart-2 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Directory?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join healthcare organizations using AI to ensure accurate provider data and better patient outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/demo">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" data-testid="button-try-demo">
                  Try Demo Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" data-testid="button-schedule-call">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
