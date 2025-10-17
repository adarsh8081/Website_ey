import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Target, DollarSign, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function About() {
  const milestones = [
    { date: "Jan 2024", title: "The Spark", description: "Sarah's story inspires the founding team to tackle healthcare directory accuracy" },
    { date: "Mar 2024", title: "First Prototype", description: "AI validation system achieves 85% accuracy in initial tests with 50 providers" },
    { date: "Jun 2024", title: "Pilot Launch", description: "Partnered with Metro Health Network to validate 2,000+ provider records" },
    { date: "Oct 2024", title: "Today", description: "Serving multiple healthcare organizations, 87% accuracy, 200+ providers/hour" },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Healthcare Data
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our mission is to ensure every patient reaches the right healthcare provider, every time, 
              through AI-powered validation and verification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Sarah's Story Changed Everything</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed">
                  Sarah Martinez, a care coordinator at Metro Health Network, spent three hours one afternoon 
                  calling providers from their network directory. Most phone numbers were wrong, addresses 
                  outdated, and hours incorrect.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The consequence? A patient with chest pain was directed to a clinic that had closed six months 
                  earlier. They ended up in the emergency room — a preventable situation that cost thousands 
                  of dollars and nearly cost a life.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When Sarah shared her story with our founding team, we realized this wasn't an isolated incident. 
                  Healthcare organizations nationwide struggle with 40-80% directory inaccuracy rates. We decided 
                  to build the solution Sarah — and millions of healthcare professionals — desperately needed.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-card to-primary/5">
              <div className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="h-24 w-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-lg font-semibold">Every validation prevents harm</p>
                  <p className="text-muted-foreground">
                    Inspired by real healthcare professionals facing real challenges every day
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">From inspiration to impact</p>
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
                    <Card className="p-6 hover-elevate">
                      <p className="text-sm text-primary font-semibold mb-2">{milestone.date}</p>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Care */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We Care</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our values drive every decision, feature, and line of code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover-elevate">
                <div className={`${value.color} mb-4`}>{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-chart-2/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">See MedIntel.AI in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience how our AI agents can transform your provider directory validation process
            </p>
            <Link href="/demo">
              <Button size="lg" data-testid="button-try-demo-cta">
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
