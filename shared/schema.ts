import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contact submission schema
export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  privacyConsent: integer("privacy_consent").notNull().default(1),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  privacyConsent: z.number().min(1, "You must accept the privacy policy"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Provider validation schema for demo
export const providers = pgTable("providers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  confidence: integer("confidence").notNull(),
  status: text("status").notNull(), // "Verified" | "Flagged" | "Needs Review"
  npiNumber: text("npi_number"),
  specialty: text("specialty"),
  lastValidated: timestamp("last_validated"),
  sources: text("sources").array(),
  notes: text("notes"),
});

export const insertProviderSchema = createInsertSchema(providers).omit({
  id: true,
  lastValidated: true,
});

export type InsertProvider = z.infer<typeof insertProviderSchema>;
export type Provider = typeof providers.$inferSelect;

// Demo session schema
export const demoSessions = pgTable("demo_sessions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fileName: text("file_name").notNull(),
  totalProviders: integer("total_providers").notNull(),
  verifiedCount: integer("verified_count").notNull(),
  flaggedCount: integer("flagged_count").notNull(),
  averageConfidence: integer("average_confidence").notNull(),
  processingTime: integer("processing_time").notNull(), // in seconds
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertDemoSessionSchema = createInsertSchema(demoSessions).omit({
  id: true,
  createdAt: true,
});

export type InsertDemoSession = z.infer<typeof insertDemoSessionSchema>;
export type DemoSession = typeof demoSessions.$inferSelect;
