import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      privacyConsent: 0,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to Send",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    submitMutation.mutate(data);
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
            Let's <span className="text-primary">Talk</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in a pilot program or enterprise partnership? We'd love to hear from you 
            and show you how MedIntel.AI can transform your provider directory.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      placeholder="Your full name"
                      data-testid="input-name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      {...form.register("company")}
                      placeholder="Your organization"
                      data-testid="input-company"
                    />
                    {form.formState.errors.company && (
                      <p className="text-sm text-destructive">{form.formState.errors.company.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="you@company.com"
                      data-testid="input-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      {...form.register("phone")}
                      placeholder="+1 (555) 123-4567"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    placeholder="Tell us about your provider directory challenges and what you're looking for..."
                    rows={6}
                    data-testid="input-message"
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={form.watch("privacyConsent") === 1}
                    onCheckedChange={(checked) => 
                      form.setValue("privacyConsent", checked ? 1 : 0)
                    }
                    data-testid="checkbox-privacy"
                  />
                  <div className="space-y-1">
                    <Label htmlFor="privacy" className="text-sm font-normal cursor-pointer">
                      I agree to the privacy policy and terms of service *
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      We'll use your information to respond to your inquiry and may contact you about our services.
                    </p>
                    {form.formState.errors.privacyConsent && (
                      <p className="text-sm text-destructive">{form.formState.errors.privacyConsent.message}</p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {submitMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@medintel.ai" className="text-sm text-muted-foreground hover:text-primary">
                      hello@medintel.ai
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-primary">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      San Francisco, CA<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-primary/5">
              <h3 className="font-semibold mb-2">Office Hours</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Monday - Friday: 9:00 AM - 6:00 PM PST
              </p>
              <p className="text-sm text-muted-foreground">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Enterprise Inquiries</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For large-scale deployments, custom integrations, or partnership opportunities:
              </p>
              <a href="mailto:enterprise@medintel.ai" className="text-sm text-primary hover:underline">
                enterprise@medintel.ai
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
