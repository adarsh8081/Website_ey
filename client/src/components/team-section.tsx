import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const teamMembers = [
  {
    name: "Adarsh Kumar",
    role: "Team Lead & AI/ML Engineering",
    // TODO: Update photo path if needed - Adarsh Kumar's profile photo
    image: "/src/uploads/adarsh.jpg",
    // TODO: Update LinkedIn URL if needed
    linkedin: "https://www.linkedin.com/in/adarshk8081",
    // TODO: Update GitHub URL if needed
    github: "https://www.github.com/adarsh8081",
    // TODO: Update email if needed
    email: "adarshkumarcs@outlook.com",
    bio: "3+ years in healthcare AI, specialized in provider data validation. Expert in GPT-4o Vision, CrewAI orchestration, and predictive analytics. Led 5+ healthcare AI projects with 90%+ success rate."
  },
  {
    name: "Utkarsh Chaudhary",
    role: "Backend Architecture & API Development",
    // TODO: Update photo path if needed - Utkarsh Chaudhary's profile photo
    image: "/src/uploads/utkarsh.jpg",
    // TODO: Update LinkedIn URL if needed
    linkedin: "https://www.linkedin.com/in/riya-sharma/",
    // TODO: Update GitHub URL if needed
    github: "https://github.com/riya-sharma",
    // TODO: Update email if needed
    email: "riya@example.com",
    bio: "FastAPI, PostgreSQL, microservices architecture expert. Healthcare compliance (HIPAA) and data security specialist. Built scalable APIs handling 1M+ requests/day."
  },
  {
    name: "Prerit Maheshwari",
    role: "Frontend Development & UX Design",
    // TODO: Update photo path if needed - Prerit Maheshwari's profile photo
    image: "/src/uploads/prerit.jpg",
    // TODO: Update LinkedIn URL if needed
    linkedin: "https://www.linkedin.com/in/prerit-maheshwari-136601255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // TODO: Update GitHub URL if needed
    github: "https://github.com/aarav-patel",
    // TODO: Update email if needed
    email: "aarav@example.com",
    bio: "Next.js 14, TypeScript, modern healthcare UI/UX designer. Voice interface and accessibility design expert. Created award-winning healthcare dashboards."
  },
  {
    name: "Shakshi Agrawal",
    role: "Data Science & Analytics",
    // TODO: Update photo path if needed - Shakshi Agrawal's profile photo
    image: "/src/uploads/shakshi.jpg",
    // TODO: Update LinkedIn URL if needed
    linkedin: "https://www.linkedin.com/in/shakshi-agrawal-40335b316/",
    // TODO: Update GitHub URL if needed
    github: "https://github.com/ShakshiAgrawal13",
    // TODO: Update email if needed
    email: "shakshiagrawal515@gmail.com",
    bio: "Prophet forecasting, Random Forest ML models specialist. Healthcare data analysis and visualization expert. 2+ years in predictive analytics for healthcare systems."
  },
  {
    name: "Abhay Kausal",
    role: "DevOps & Cloud Infrastructure",
    // TODO: Update photo path if needed - Abhay Kausal's profile photo
    image: "/src/uploads/abhay.png",
    // TODO: Update LinkedIn URL if needed
    linkedin: "https://www.linkedin.com/in/abhay-kaushal-b85429248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    // TODO: Update GitHub URL if needed
    github: "https://github.com/karan-mehta",
    // TODO: Update email if needed
    email: "karan@example.com",
    bio: "AWS/Azure deployment, Kubernetes, CI/CD expert. Healthcare-grade security and monitoring specialist. Deployed 10+ production healthcare applications."
  }
];

export default function TeamSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Meet Our Team
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Healthcare and AI experts working together to solve provider directory challenges
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Card className="p-6 card-enhanced hover-elevate group">
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-24 h-24">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-primary/10 group-hover:border-primary/20 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>

                <div className="flex justify-center space-x-3 pt-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}