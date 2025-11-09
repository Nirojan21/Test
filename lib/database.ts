// database.ts
// Dynamically use MySQL if configured, otherwise use in-memory fallback

import type {
  Logo,
  MenuItem,
  Service,
  TeamMember,
  Project,
  BlogPost,
  ClientLogo,
  ContactInfo,
  HeroSection,
  AboutSection,
  Statistic,
  Footer,
} from "./schemas"; // Corrected import path

const useMySQL = process.env.DB_HOST && process.env.DB_USER;

let db: any;

if (useMySQL) {
  // ✅ Use dynamic import for MySQL
  import("mysql2/promise").then((mysql) => {
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    db = pool;
  });
} else {
  // ✅ In-memory database fallback
  class Database {
    private logos: Logo[] = [];
    private menuItems: MenuItem[] = [];
    private services: Service[] = [];
    private teamMembers: TeamMember[] = [];
    private projects: Project[] = [];
    private blogPosts: BlogPost[] = [];
    private clientLogos: ClientLogo[] = [];
    private contactInfo: ContactInfo[] = [];
    private heroSection: HeroSection | null = null;
    private aboutSection: AboutSection | null = null;
    private statistics: Statistic[] = [];
    private footer: Footer | null = null;

    // Logo methods
    async getLogos(): Promise<Logo[]> {
      return this.logos.filter((logo) => logo.isActive);
    }

    async getLogoById(id: string): Promise<Logo | null> {
      return this.logos.find((logo) => logo.id === id) || null;
    }

    async createLogo(
      logo: Omit<Logo, "id" | "createdAt" | "updatedAt">
    ): Promise<Logo> {
      const newLogo: Logo = {
        ...logo,
        id: `logo-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      this.logos.push(newLogo);
      return newLogo;
    }

    async updateLogo(id: string, updates: Partial<Logo>): Promise<Logo | null> {
      const index = this.logos.findIndex((logo) => logo.id === id);
      if (index === -1) return null;
      this.logos[index] = {
        ...this.logos[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      return this.logos[index];
    }

    async deleteLogo(id: string): Promise<boolean> {
      const index = this.logos.findIndex((logo) => logo.id === id);
      if (index === -1) return false;
      this.logos.splice(index, 1);
      return true;
    }

    // Menu Item methods
    getMenuItems(): MenuItem[] {
      return this.menuItems
        .filter((item) => item.isActive)
        .sort((a, b) => a.order - b.order);
    }

    getMenuItemById(id: string): MenuItem | undefined {
      return this.menuItems.find((item) => item.id === id);
    }

    createMenuItem(
      item: Omit<MenuItem, "id" | "createdAt" | "updatedAt">
    ): MenuItem {
      const newItem: MenuItem = {
        ...item,
        id: `menu-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      this.menuItems.push(newItem);
      return newItem;
    }

    updateMenuItem(id: string, updates: Partial<MenuItem>): MenuItem | null {
      const index = this.menuItems.findIndex((item) => item.id === id);
      if (index === -1) return null;
      this.menuItems[index] = {
        ...this.menuItems[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      return this.menuItems[index];
    }

    deleteMenuItem(id: string): boolean {
      const index = this.menuItems.findIndex((item) => item.id === id);
      if (index === -1) return false;
      this.menuItems.splice(index, 1);
      return true;
    }

    // --- Repeat same structure for Services, TeamMembers, Projects, BlogPosts, etc. ---
    // (Your existing logic for those entities is perfectly fine, no change needed)
  }

  db = new Database();
}

export { db };
