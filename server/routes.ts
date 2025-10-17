import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertProviderSchema, type Provider } from "@shared/schema";
import { z } from "zod";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

// Mock provider data generator
function generateMockProviders(count: number = 10): Provider[] {
  const names = [
    "Dr. Sarah Johnson",
    "Dr. Michael Chen",
    "Dr. Emily Rodriguez",
    "Metro Urgent Care Center",
    "Dr. David Kim",
    "Valley Medical Group",
    "Dr. Lisa Thompson",
    "Dr. James Martinez",
    "Sunrise Pediatric Clinic",
    "Dr. Robert Williams",
  ];

  const specialties = [
    "Cardiology",
    "Pediatrics",
    "Family Medicine",
    "Urgent Care",
    "Internal Medicine",
    "General Practice",
    "Orthopedics",
    "Dermatology",
  ];

  const addresses = [
    "123 Medical Plaza, Suite 200, San Francisco, CA 94102",
    "456 Health Center Dr, Building A, Oakland, CA 94601",
    "789 Care Ave, Floor 3, San Jose, CA 95110",
    "321 Wellness Blvd, Berkeley, CA 94704",
    "654 Provider St, Palo Alto, CA 94301",
    "987 Doctor Lane, Redwood City, CA 94063",
    "147 Clinic Road, Mountain View, CA 94040",
    "258 Hospital Way, Sunnyvale, CA 94085",
    "369 Medical Circle, Santa Clara, CA 95050",
    "741 Health Park, Fremont, CA 94536",
  ];

  const phones = [
    "(415) 555-0123",
    "(510) 555-0456",
    "(408) 555-0789",
    "(510) 555-0321",
    "(650) 555-0654",
    "(650) 555-0987",
    "(650) 555-0147",
    "(408) 555-0258",
    "(408) 555-0369",
    "(510) 555-0741",
  ];

  const statuses: Array<"Verified" | "Flagged" | "Needs Review"> = [
    "Verified",
    "Verified",
    "Verified",
    "Flagged",
    "Verified",
    "Needs Review",
    "Verified",
    "Flagged",
    "Verified",
    "Verified",
  ];

  const confidences = [92, 87, 95, 34, 78, 68, 88, 45, 91, 85];

  return Array.from({ length: Math.min(count, 10) }, (_, i) => ({
    id: `provider-${i}`,
    name: names[i],
    phone: phones[i],
    address: addresses[i],
    specialty: specialties[i % specialties.length],
    confidence: confidences[i],
    status: statuses[i],
    npiNumber: `${1000000000 + Math.floor(Math.random() * 999999999)}`,
    sources: ["NPI Registry", "Google Maps", "Insurance Network"],
    notes: statuses[i] === "Flagged" ? "Phone number disconnected" : null,
    lastValidated: new Date(),
  }));
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      
      // Simulate email sending (in production, use SendGrid or similar)
      console.log("Contact submission received:", {
        name: contact.name,
        company: contact.company,
        email: contact.email,
      });

      res.json({ 
        success: true, 
        message: "Thank you for your message. We'll be in touch soon!",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Validation failed", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Demo - Upload file and process
  app.post("/api/demo/upload", upload.single("file"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const fileName = req.file.originalname;
      
      // Simulate processing delay (10 seconds)
      await new Promise((resolve) => setTimeout(resolve, 10000));

      // Generate mock providers
      const providers = generateMockProviders(10);
      
      // Save providers to storage
      for (const provider of providers) {
        await storage.createProvider(provider);
      }

      // Calculate summary
      const verifiedCount = providers.filter((p) => p.status === "Verified").length;
      const flaggedCount = providers.filter((p) => p.status === "Flagged").length;
      const avgConfidence = Math.round(
        providers.reduce((sum, p) => sum + p.confidence, 0) / providers.length
      );

      const summary = {
        totalProviders: providers.length,
        verifiedCount,
        flaggedCount,
        averageConfidence: avgConfidence,
        processingTime: 10,
      };

      // Save demo session
      await storage.createDemoSession({
        fileName,
        totalProviders: providers.length,
        verifiedCount,
        flaggedCount,
        averageConfidence: avgConfidence,
        processingTime: 10,
      });

      res.json({ providers, summary });
    } catch (error) {
      console.error("Demo upload error:", error);
      res.status(500).json({ error: "Failed to process file" });
    }
  });

  // Demo - Load sample data
  app.post("/api/demo/sample", async (req, res) => {
    try {
      // Generate sample providers immediately
      const providers = generateMockProviders(10);
      
      // Simulate shorter processing for sample data
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Calculate summary
      const verifiedCount = providers.filter((p) => p.status === "Verified").length;
      const flaggedCount = providers.filter((p) => p.status === "Flagged").length;
      const avgConfidence = Math.round(
        providers.reduce((sum, p) => sum + p.confidence, 0) / providers.length
      );

      const summary = {
        totalProviders: providers.length,
        verifiedCount,
        flaggedCount,
        averageConfidence: avgConfidence,
        processingTime: 2,
      };

      res.json({ providers, summary });
    } catch (error) {
      console.error("Sample data error:", error);
      res.status(500).json({ error: "Failed to load sample data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
