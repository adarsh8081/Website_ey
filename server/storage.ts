import { 
  type InsertContact, 
  type ContactSubmission,
  type InsertProvider,
  type Provider,
  type InsertDemoSession,
  type DemoSession
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact submissions
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Demo providers
  createProvider(provider: InsertProvider): Promise<Provider>;
  getProviders(): Promise<Provider[]>;
  
  // Demo sessions
  createDemoSession(session: InsertDemoSession): Promise<DemoSession>;
  getDemoSessions(): Promise<DemoSession[]>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;
  private providers: Map<string, Provider>;
  private demoSessions: Map<string, DemoSession>;

  constructor() {
    this.contactSubmissions = new Map();
    this.providers = new Map();
    this.demoSessions = new Map();
  }

  // Contact submissions
  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const contact: ContactSubmission = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, contact);
    return contact;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  // Demo providers
  async createProvider(insertProvider: InsertProvider): Promise<Provider> {
    const id = randomUUID();
    const provider: Provider = {
      ...insertProvider,
      id,
      lastValidated: new Date(),
    };
    this.providers.set(id, provider);
    return provider;
  }

  async getProviders(): Promise<Provider[]> {
    return Array.from(this.providers.values());
  }

  // Demo sessions
  async createDemoSession(insertSession: InsertDemoSession): Promise<DemoSession> {
    const id = randomUUID();
    const session: DemoSession = {
      ...insertSession,
      id,
      createdAt: new Date(),
    };
    this.demoSessions.set(id, session);
    return session;
  }

  async getDemoSessions(): Promise<DemoSession[]> {
    return Array.from(this.demoSessions.values());
  }
}

export const storage = new MemStorage();
