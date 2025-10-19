import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Heart, 
  Target, 
  DollarSign, 
  Shield, 
  ChevronRight, 
  Bot, 
  Brain, 
  Eye, 
  Database,
  TrendingUp,
  Award,
  Clock,
  Users,
  CheckCircle2,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const milestones = [
    { 
      date: "Oct 2024", 
      title: "EY Techathon Challenge", 
      description: "Identified critical healthcare problem: 40-80% provider directory inaccuracy causing patient access issues and regulatory risks" 
    },
    { 
      date: "Oct 2024", 
      title: "AI Agent Development", 
      description: "Built 4 specialized AI agents using CrewAI orchestration, GPT-4o Vision, Prophet forecasting, and Random Forest ML" 
    },
    { 
      date: "Oct 2024", 
      title: "Breakthrough Innovation", 
      description: "Achieved 120× faster processing (10 hours → 5 minutes), 87% accuracy, and 97% automation rate" 
    },
    { 
      date: "Oct 2024", 
      title: "Production Ready", 
      description: "Complete solution with Docker deployment, CI/CD pipeline, monitoring, and enterprise-grade security" 
    },
  ];

  const aiAgents = [
    {
      name: "Data Validation Agent",
      icon: <Shield className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      description: "Validates NPI numbers, phone numbers, emails, and addresses via multiple APIs and web scraping",
      capabilities: ["NPI Registry API", "Google Maps API", "Web Scraping", "GPT-4o Vision PDF Extraction"]
    },
    {
      name: "Information Enrichment Agent", 
      icon: <Brain className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      description: "Enriches provider profiles with public data and predicts when information will decay",
      capabilities: ["Web Scraping", "Prophet Forecasting", "Data Enrichment", "Decay Prediction"]
    },
    {
      name: "Quality Assurance Agent",
      icon: <Target className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500", 
      description: "Uses Random Forest ML to score confidence and achieve 97% automation rate",
      capabilities: ["Random Forest ML", "Cross-validation", "Fraud Detection", "Quality Metrics"]
    },
    {
      name: "Directory Management Agent",
      icon: <Database className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      description: "Generates reports, alerts, and manages workflow queues for manual review",
      capabilities: ["Report Generation", "Workflow Queues", "Alert Management", "Export Functions"]
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Patient Safety First",
      description: "Every validation prevents potential harm from incorrect provider information",
      color: "text-critical",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance & Trust",
      description: "HIPAA-compliant infrastructure ensuring data security and regulatory adherence",
      color: "text-primary",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Cost Efficiency",
      description: "Reduce manual verification costs by 75% while improving accuracy",
      color: "text-success",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Accuracy Obsession",
      description: "Continuous improvement through machine learning and real-world feedback",
      color: "text-chart-2",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 dark:bg-gradient-to-br dark:from-background dark:via-background-secondary dark:to-primary/20 py-20 lg:py-32 transition-all duration-300">
        {/* Background EY Techathon Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center" 
            alt="EY Techathon 2024"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground dark:text-heading">
              EY Techathon 2024:{" "}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent dark:from-accent-blue dark:to-accent-cyan">
                Provider Data Validation & Directory Management
              </span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-paragraph max-w-3xl mx-auto">
              An AI-powered system that validates 200+ healthcare providers in under 10 minutes with 87% accuracy, 
              using 4 intelligent agents and cutting-edge technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Healthcare Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=1080&fit=crop&crop=center" 
            alt="Healthcare Provider Directory"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-heading">The Healthcare Directory Crisis</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground dark:text-paragraph leading-relaxed">
                  Healthcare payers face a critical challenge: <strong>40-80% of provider directories contain inaccurate information</strong>. 
                  Manual verification processes require staff to call hundreds of providers monthly for basic updates, 
                  creating member frustration and access issues.
                </p>
                <p className="text-muted-foreground dark:text-paragraph leading-relaxed">
                  The consequences are severe: patients can't reach providers, regulatory compliance risks increase, 
                  and operational resources are wasted. A patient with chest pain being directed to a closed clinic 
                  could end up in the emergency room — a preventable situation.
                </p>
                <p className="text-muted-foreground dark:text-paragraph leading-relaxed">
                  Our EY Techathon 2024 solution addresses this crisis with <strong>4 intelligent AI agents</strong> that 
                  validate 200+ providers in under 10 minutes with 87% accuracy — <strong>120× faster</strong> than manual processes.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-card to-primary/5 dark:from-card dark:to-primary/20 transition-all duration-300">
              <div className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="h-24 w-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-lg font-semibold text-foreground dark:text-heading">Every validation prevents harm</p>
                  <p className="text-muted-foreground dark:text-paragraph">
                    Inspired by real healthcare professionals facing real challenges every day
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30 dark:bg-muted/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-heading">Our Journey</h2>
            <p className="text-lg text-muted-foreground dark:text-paragraph">From inspiration to impact</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.date}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1" />
                  <div className="relative z-10 flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center border-4 border-background">
                      <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card className="p-6 hover-elevate transition-all duration-300">
                      <p className="text-sm text-primary dark:text-accent-blue font-semibold mb-2">{milestone.date}</p>
                      <h3 className="text-xl font-bold mb-2 text-foreground dark:text-heading">{milestone.title}</h3>
                      <p className="text-muted-foreground dark:text-paragraph">{milestone.description}</p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden">
        {/* Background AI Technology Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&crop=center" 
            alt="AI Technology Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">4 AI Agents</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Specialized AI agents working together to transform provider data validation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiAgents.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group"
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
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

                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${agent.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Success Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&crop=center" 
            alt="Success and Achievement"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-heading">Key Achievements</h2>
            <p className="text-lg text-muted-foreground dark:text-paragraph max-w-2xl mx-auto">
              Exceeding all EY Techathon requirements and delivering production-ready innovation
            </p>
          </motion.div>

          {/* Achievement Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center" 
                alt="Project Achievements Dashboard"
                className="w-full h-64 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">EY Techathon 2024 Achievements</h3>
                <p className="text-sm text-gray-300">120× faster, 87% accuracy, 97% automation</p>
              </div>
            </div>
          </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Zap className="h-8 w-8" />,
              title: "120× Faster",
              description: "10 hours → 5 minutes processing time",
              color: "text-blue-500",
              highlight: "3× faster than required"
            },
            {
              icon: <Target className="h-8 w-8" />,
              title: "87% Accuracy",
              description: "Exceeds 80% industry target",
              color: "text-green-500",
              highlight: "+9% better than required"
            },
            {
              icon: <Bot className="h-8 w-8" />,
              title: "97% Automation",
              description: "Only 3% need manual review",
              color: "text-purple-500",
              highlight: "Unique innovation"
            },
            {
              icon: <Eye className="h-8 w-8" />,
              title: "85%+ PDF Extraction",
              description: "GPT-4o Vision accuracy",
              color: "text-orange-500",
              highlight: "Meets requirements"
            }
          ].map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover-elevate transition-all duration-300 text-center">
                <div className={`${achievement.color} mb-4 flex justify-center`}>{achievement.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-foreground dark:text-heading">{achievement.title}</h3>
                <p className="text-muted-foreground dark:text-paragraph mb-3">{achievement.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {achievement.highlight}
                </Badge>
              </Card>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10 dark:from-primary/20 dark:via-chart-2/20 dark:to-primary/20 transition-all duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-heading">See Our AI Agents in Action</h2>
            <p className="text-lg text-muted-foreground dark:text-paragraph max-w-2xl mx-auto">
              Experience how our 4 AI agents can transform your provider directory validation process in under 10 minutes
            </p>
            <Link href="/demo">
              <Button size="lg" className="btn-primary-glow transition-all duration-300" data-testid="button-try-demo-cta">
                Try the Demo
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
