// Database - Use MySQL if configured, otherwise in-memory
// Check if MySQL is configured
const useMySQL = process.env.DB_HOST && process.env.DB_USER;

if (useMySQL) {
  // Export MySQL database
  export { db } from "./database-mysql";
} else {
  // Export in-memory database
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
  } from "./schemas";

  // Database storage (in-memory)
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

  async createLogo(logo: Omit<Logo, "id" | "createdAt" | "updatedAt">): Promise<Logo> {
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

  // Menu Items methods
  getMenuItems(): MenuItem[] {
    return this.menuItems.filter((item) => item.isActive).sort((a, b) => a.order - b.order);
  }

  getMenuItemById(id: string): MenuItem | undefined {
    return this.menuItems.find((item) => item.id === id);
  }

  createMenuItem(item: Omit<MenuItem, "id" | "createdAt" | "updatedAt">): MenuItem {
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

  // Service methods
  getServices(): Service[] {
    return this.services.filter((s) => s.isActive).sort((a, b) => a.order - b.order);
  }

  createService(service: Omit<Service, "id" | "createdAt" | "updatedAt">): Service {
    const newService: Service = {
      ...service,
      id: `service-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.services.push(newService);
    return newService;
  }

  updateService(id: string, updates: Partial<Service>): Service | null {
    const index = this.services.findIndex((s) => s.id === id);
    if (index === -1) return null;
    this.services[index] = {
      ...this.services[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this.services[index];
  }

  deleteService(id: string): boolean {
    const index = this.services.findIndex((s) => s.id === id);
    if (index === -1) return false;
    this.services.splice(index, 1);
    return true;
  }

  // Team Member methods
  getTeamMembers(): TeamMember[] {
    return this.teamMembers.filter((m) => m.isActive).sort((a, b) => a.order - b.order);
  }

  createTeamMember(member: Omit<TeamMember, "id" | "createdAt" | "updatedAt">): TeamMember {
    const newMember: TeamMember = {
      ...member,
      id: `team-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.teamMembers.push(newMember);
    return newMember;
  }

  updateTeamMember(id: string, updates: Partial<TeamMember>): TeamMember | null {
    const index = this.teamMembers.findIndex((m) => m.id === id);
    if (index === -1) return null;
    this.teamMembers[index] = {
      ...this.teamMembers[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this.teamMembers[index];
  }

  deleteTeamMember(id: string): boolean {
    const index = this.teamMembers.findIndex((m) => m.id === id);
    if (index === -1) return false;
    this.teamMembers.splice(index, 1);
    return true;
  }

  // Project methods
  getProjects(): Project[] {
    return this.projects.filter((p) => p.isActive).sort((a, b) => a.order - b.order);
  }

  createProject(project: Omit<Project, "id" | "createdAt" | "updatedAt">): Project {
    const newProject: Project = {
      ...project,
      id: `project-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.projects.push(newProject);
    return newProject;
  }

  updateProject(id: string, updates: Partial<Project>): Project | null {
    const index = this.projects.findIndex((p) => p.id === id);
    if (index === -1) return null;
    this.projects[index] = {
      ...this.projects[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this.projects[index];
  }

  deleteProject(id: string): boolean {
    const index = this.projects.findIndex((p) => p.id === id);
    if (index === -1) return false;
    this.projects.splice(index, 1);
    return true;
  }

  // Blog Post methods
  getBlogPosts(): BlogPost[] {
    return this.blogPosts.filter((p) => p.isActive).sort((a, b) => a.order - b.order);
  }

  createBlogPost(post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): BlogPost {
    const newPost: BlogPost = {
      ...post,
      id: `blog-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.blogPosts.push(newPost);
    return newPost;
  }

  updateBlogPost(id: string, updates: Partial<BlogPost>): BlogPost | null {
    const index = this.blogPosts.findIndex((p) => p.id === id);
    if (index === -1) return null;
    this.blogPosts[index] = {
      ...this.blogPosts[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this.blogPosts[index];
  }

  deleteBlogPost(id: string): boolean {
    const index = this.blogPosts.findIndex((p) => p.id === id);
    if (index === -1) return false;
    this.blogPosts.splice(index, 1);
    return true;
  }

  // Client Logo methods
  getClientLogos(): ClientLogo[] {
    return this.clientLogos.filter((c) => c.isActive).sort((a, b) => a.order - b.order);
  }

  createClientLogo(logo: Omit<ClientLogo, "id" | "createdAt" | "updatedAt">): ClientLogo {
    const newLogo: ClientLogo = {
      ...logo,
      id: `client-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.clientLogos.push(newLogo);
    return newLogo;
  }

  updateClientLogo(id: string, updates: Partial<ClientLogo>): ClientLogo | null {
    const index = this.clientLogos.findIndex((c) => c.id === id);
    if (index === -1) return null;
    this.clientLogos[index] = {
      ...this.clientLogos[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this.clientLogos[index];
  }

  deleteClientLogo(id: string): boolean {
    const index = this.clientLogos.findIndex((c) => c.id === id);
    if (index === -1) return false;
    this.clientLogos.splice(index, 1);
    return true;
  }

  // Hero Section methods
  getHeroSection(): HeroSection | null {
    return this.heroSection;
  }

  setHeroSection(hero: Omit<HeroSection, "id" | "createdAt" | "updatedAt">): HeroSection {
    if (this.heroSection) {
      this.heroSection = {
        ...this.heroSection,
        ...hero,
        updatedAt: new Date().toISOString(),
      };
    } else {
      this.heroSection = {
        ...hero,
        id: "hero-1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    }
    return this.heroSection;
  }

  // About Section methods
  getAboutSection(): AboutSection | null {
    return this.aboutSection;
  }

  setAboutSection(about: Omit<AboutSection, "id" | "createdAt" | "updatedAt">): AboutSection {
    if (this.aboutSection) {
      this.aboutSection = {
        ...this.aboutSection,
        ...about,
        updatedAt: new Date().toISOString(),
      };
    } else {
      this.aboutSection = {
        ...about,
        id: "about-1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    }
    return this.aboutSection;
  }

  // Statistics methods
  getStatistics(): Statistic[] {
    return this.statistics.filter((s) => s.isActive).sort((a, b) => a.order - b.order);
  }

  createStatistic(stat: Omit<Statistic, "id" | "createdAt" | "updatedAt">): Statistic {
    const newStat: Statistic = {
      ...stat,
      id: `stat-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.statistics.push(newStat);
    return newStat;
  }

  updateStatistic(id: string, updates: Partial<Statistic>): Statistic | null {
    const index = this.statistics.findIndex((s) => s.id === id);
    if (index === -1) return null;
    this.statistics[index] = {
      ...this.statistics[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this.statistics[index];
  }

  deleteStatistic(id: string): boolean {
    const index = this.statistics.findIndex((s) => s.id === id);
    if (index === -1) return false;
    this.statistics.splice(index, 1);
    return true;
  }

  // Footer methods
  getFooter(): Footer | null {
    return this.footer;
  }

  setFooter(footer: Omit<Footer, "id" | "createdAt" | "updatedAt">): Footer {
    if (this.footer) {
      this.footer = {
        ...this.footer,
        ...footer,
        updatedAt: new Date().toISOString(),
      };
    } else {
      this.footer = {
        ...footer,
        id: "footer-1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    }
    return this.footer;
  }
}

// Export singleton instance
export const db = new Database();

