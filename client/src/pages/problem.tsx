import { motion } from "framer-motion";
import { Link } from "wouter";
import { AlertTriangle, TrendingDown, DollarSign, Clock, Shield, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Problem() {
  const stats = [
    { icon: <TrendingDown className="h-8 w-8" />, value: "40-80%", label: "Directory Inaccuracy Rate", color: "text-critical" },
    { icon: <Clock className="h-8 w-8" />, value: "15-20h", label: "Weekly Manual Verification", color: "text-warning" },
    { icon: <DollarSign className="h-8 w-8" />, value: "$250K", label: "Annual Compliance Fines", color: "text-destructive" },
    { icon: <Users className="h-8 w-8" />, value: "1 in 4", label: "Patients Affected", color: "text-chart-4" },
  ];

  const impacts = [
    {
      title: "Emergency Room Visits",
      description: "Patients sent to wrong or closed facilities end up in costly ER visits",
      severity: "critical",
    },
    {
      title: "Regulatory Fines",
      description: "CMS imposes significant penalties for inaccurate provider directories",
      severity: "high",
    },
    {
      title: "Member Churn",
      description: "Frustrated members switch to competitors with reliable provider networks",
      severity: "high",
    },
    {
      title: "Staff Burnout",
      description: "Care coordinators waste hours on phone calls instead of patient care",
      severity: "medium",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero - Sarah's Story */}
      <section className="relative overflow-hidden bg-gradient-to-br from-critical/5 via-background to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-critical/10 text-critical rounded-full text-sm font-medium mb-6">
                <AlertTriangle className="h-4 w-4" />
                <span>Real Impact, Real Consequences</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Call That Changed{" "}
                <span className="text-critical">Everything</span>
              </h1>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  It was a Tuesday afternoon when Sarah Martinez, a care coordinator at Metro Health Network, 
                  picked up the phone to help a patient find a nearby cardiologist.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  She spent <span className="font-semibold text-foreground">three hours</span> calling providers 
                  from their network directory. The first number was disconnected. The second went to a 
                  dental office. The third clinic had closed six months ago.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Meanwhile, her patient — experiencing chest pain — arrived at the closed clinic only to 
                  discover it was gone. They ended up in the emergency room, adding <span className="font-semibold text-foreground">$8,000</span> to 
                  their medical bills and nearly costing their life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-gradient-to-br from-card to-critical/5 border-critical/20">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-critical/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Call #1 - 2:15 PM</p>
                      <p className="text-sm text-muted-foreground">Number disconnected</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🦷</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Call #2 - 2:42 PM</p>
                      <p className="text-sm text-muted-foreground">Wrong specialty (Dental office)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-critical/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🚫</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Call #3 - 3:18 PM</p>
                      <p className="text-sm text-muted-foreground">Clinic closed 6 months ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-critical flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-critical">Result - 4:45 PM</p>
                      <p className="text-sm text-muted-foreground">Patient in ER, $8,000 bill</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Scale of the Problem</h2>
          <p className="text-lg text-muted-foreground">Healthcare directory inaccuracy is a nationwide crisis</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 text-center hover-elevate">
                <div className={`${stat.color} flex justify-center mb-4`}>{stat.icon}</div>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pain Point Infographic */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Manual Verification Nightmare</h2>
            <p className="text-lg text-muted-foreground">
              Traditional verification is slow, expensive, and error-prone
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: 1, label: "Extract", desc: "Manually copy provider data", time: "15 min" },
              { step: 2, label: "Search", desc: "Look up in NPI database", time: "10 min" },
              { step: 3, label: "Call", desc: "Phone verification", time: "20 min" },
              { step: 4, label: "Cross-check", desc: "Insurance network lookup", time: "15 min" },
              { step: 5, label: "Update", desc: "Manual data entry", time: "10 min" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="p-6 h-full">
                  <div className="h-12 w-12 rounded-full bg-critical/10 text-critical font-bold text-xl flex items-center justify-center mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2 text-center">{item.label}</h3>
                  <p className="text-xs text-muted-foreground text-center mb-2">{item.desc}</p>
                  <p className="text-sm font-bold text-critical text-center">{item.time}</p>
                </Card>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 text-muted-foreground">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Card className="inline-block px-8 py-4 bg-critical/10 border-critical/20">
              <p className="text-2xl font-bold text-critical">Total: 70 minutes per provider</p>
              <p className="text-sm text-muted-foreground mt-1">And still only ~60% accuracy</p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Regulatory & Business Impacts */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Happens If Left Unchecked</h2>
          <p className="text-lg text-muted-foreground">The cascading consequences of inaccurate directories</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {impacts.map((impact, index) => {
            const severityColors = {
              critical: "border-critical/30 bg-critical/5",
              high: "border-destructive/30 bg-destructive/5",
              medium: "border-warning/30 bg-warning/5",
            };

            return (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-6 ${severityColors[impact.severity as keyof typeof severityColors]} border-2`}>
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-critical flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{impact.title}</h3>
                      <p className="text-muted-foreground">{impact.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA to Solution */}
      <section className="py-20 bg-gradient-to-r from-primary to-chart-2 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">There's a Better Way</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Discover how AI-powered validation can solve these problems and transform your provider directory
            </p>
            <Link href="/solution">
              <Button size="lg" variant="secondary" data-testid="button-see-solution">
                See Our Solution
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
