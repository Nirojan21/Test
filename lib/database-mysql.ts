// MySQL Database Implementation
import { executeQuery } from "./mysql";
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

class MySQLDatabase {
  // Logo methods
  async getLogos(): Promise<Logo[]> {
    const results = await executeQuery<Logo[]>(
      "SELECT * FROM logos WHERE isActive = 1 ORDER BY createdAt DESC"
    );
    return results;
  }

  async getLogoById(id: string): Promise<Logo | null> {
    const results = await executeQuery<Logo[]>(
      "SELECT * FROM logos WHERE id = ?",
      [id]
    );
    return results[0] || null;
  }

  async createLogo(logo: Omit<Logo, "id" | "createdAt" | "updatedAt">): Promise<Logo> {
    const id = `logo-${Date.now()}`;
    const now = new Date().toISOString();
    await executeQuery(
      "INSERT INTO logos (id, text, imageUrl, link, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [id, logo.text, logo.imageUrl || null, logo.link, logo.isActive ? 1 : 0, now, now]
    );
    return { ...logo, id, createdAt: now, updatedAt: now };
  }

  async updateLogo(id: string, updates: Partial<Logo>): Promise<Logo | null> {
    const now = new Date().toISOString();
    const fields: string[] = [];
    const values: any[] = [];

    if (updates.text !== undefined) {
      fields.push("text = ?");
      values.push(updates.text);
    }
    if (updates.imageUrl !== undefined) {
      fields.push("imageUrl = ?");
      values.push(updates.imageUrl);
    }
    if (updates.link !== undefined) {
      fields.push("link = ?");
      values.push(updates.link);
    }
    if (updates.isActive !== undefined) {
      fields.push("isActive = ?");
      values.push(updates.isActive ? 1 : 0);
    }
    fields.push("updatedAt = ?");
    values.push(now);
    values.push(id);

    await executeQuery(
      `UPDATE logos SET ${fields.join(", ")} WHERE id = ?`,
      values
    );
    return this.getLogoById(id);
  }

  async deleteLogo(id: string): Promise<boolean> {
    const result = await executeQuery<any>(
      "DELETE FROM logos WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  // Menu Items methods
  async getMenuItems(): Promise<MenuItem[]> {
    const results = await executeQuery<MenuItem[]>(
      "SELECT * FROM menu_items WHERE isActive = 1 ORDER BY `order` ASC"
    );
    return results;
  }

  async getMenuItemById(id: string): Promise<MenuItem | null> {
    const results = await executeQuery<MenuItem[]>(
      "SELECT * FROM menu_items WHERE id = ?",
      [id]
    );
    return results[0] || null;
  }

  async createMenuItem(item: Omit<MenuItem, "id" | "createdAt" | "updatedAt">): Promise<MenuItem> {
    const id = `menu-${Date.now()}`;
    const now = new Date().toISOString();
    await executeQuery(
      "INSERT INTO menu_items (id, name, href, `order`, isActive, isExternal, icon, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id,
        item.name,
        item.href,
        item.order,
        item.isActive ? 1 : 0,
        item.isExternal ? 1 : 0,
        item.icon || null,
        now,
        now,
      ]
    );
    return { ...item, id, createdAt: now, updatedAt: now };
  }

  async updateMenuItem(id: string, updates: Partial<MenuItem>): Promise<MenuItem | null> {
    const now = new Date().toISOString();
    const fields: string[] = [];
    const values: any[] = [];

    if (updates.name !== undefined) {
      fields.push("name = ?");
      values.push(updates.name);
    }
    if (updates.href !== undefined) {
      fields.push("href = ?");
      values.push(updates.href);
    }
    if (updates.order !== undefined) {
      fields.push("`order` = ?");
      values.push(updates.order);
    }
    if (updates.isActive !== undefined) {
      fields.push("isActive = ?");
      values.push(updates.isActive ? 1 : 0);
    }
    if (updates.isExternal !== undefined) {
      fields.push("isExternal = ?");
      values.push(updates.isExternal ? 1 : 0);
    }
    if (updates.icon !== undefined) {
      fields.push("icon = ?");
      values.push(updates.icon);
    }
    fields.push("updatedAt = ?");
    values.push(now);
    values.push(id);

    await executeQuery(
      `UPDATE menu_items SET ${fields.join(", ")} WHERE id = ?`,
      values
    );
    return this.getMenuItemById(id);
  }

  async deleteMenuItem(id: string): Promise<boolean> {
    const result = await executeQuery<any>(
      "DELETE FROM menu_items WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  // Service methods
  async getServices(): Promise<Service[]> {
    const results = await executeQuery<Service[]>(
      "SELECT * FROM services WHERE isActive = 1 ORDER BY `order` ASC"
    );
    return results;
  }

  async createService(service: Omit<Service, "id" | "createdAt" | "updatedAt">): Promise<Service> {
    const id = `service-${Date.now()}`;
    const now = new Date().toISOString();
    await executeQuery(
      "INSERT INTO services (id, icon, title, description, `order`, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id,
        service.icon,
        service.title,
        service.description,
        service.order,
        service.isActive ? 1 : 0,
        now,
        now,
      ]
    );
    return { ...service, id, createdAt: now, updatedAt: now };
  }

  async updateService(id: string, updates: Partial<Service>): Promise<Service | null> {
    const now = new Date().toISOString();
    const fields: string[] = [];
    const values: any[] = [];

    if (updates.icon !== undefined) {
      fields.push("icon = ?");
      values.push(updates.icon);
    }
    if (updates.title !== undefined) {
      fields.push("title = ?");
      values.push(updates.title);
    }
    if (updates.description !== undefined) {
      fields.push("description = ?");
      values.push(updates.description);
    }
    if (updates.order !== undefined) {
      fields.push("`order` = ?");
      values.push(updates.order);
    }
    if (updates.isActive !== undefined) {
      fields.push("isActive = ?");
      values.push(updates.isActive ? 1 : 0);
    }
    fields.push("updatedAt = ?");
    values.push(now);
    values.push(id);

    await executeQuery(
      `UPDATE services SET ${fields.join(", ")} WHERE id = ?`,
      values
    );
    const results = await executeQuery<Service[]>(
      "SELECT * FROM services WHERE id = ?",
      [id]
    );
    return results[0] || null;
  }

  async deleteService(id: string): Promise<boolean> {
    const result = await executeQuery<any>(
      "DELETE FROM services WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  // Team Member methods
  async getTeamMembers(): Promise<TeamMember[]> {
    const results = await executeQuery<TeamMember[]>(
      "SELECT * FROM team_members WHERE isActive = 1 ORDER BY `order` ASC"
    );
    return results;
  }

  async createTeamMember(member: Omit<TeamMember, "id" | "createdAt" | "updatedAt">): Promise<TeamMember> {
    const id = `team-${Date.now()}`;
    const now = new Date().toISOString();
    const socialLinks = JSON.stringify(member.socialLinks || {});
    await executeQuery(
      "INSERT INTO team_members (id, name, role, imageUrl, socialLinks, `order`, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id,
        member.name,
        member.role,
        member.imageUrl,
        socialLinks,
        member.order,
        member.isActive ? 1 : 0,
        now,
        now,
      ]
    );
    return { ...member, id, createdAt: now, updatedAt: now };
  }

  async updateTeamMember(id: string, updates: Partial<TeamMember>): Promise<TeamMember | null> {
    const now = new Date().toISOString();
    const fields: string[] = [];
    const values: any[] = [];

    if (updates.name !== undefined) {
      fields.push("name = ?");
      values.push(updates.name);
    }
    if (updates.role !== undefined) {
      fields.push("role = ?");
      values.push(updates.role);
    }
    if (updates.imageUrl !== undefined) {
      fields.push("imageUrl = ?");
      values.push(updates.imageUrl);
    }
    if (updates.socialLinks !== undefined) {
      fields.push("socialLinks = ?");
      values.push(JSON.stringify(updates.socialLinks));
    }
    if (updates.order !== undefined) {
      fields.push("`order` = ?");
      values.push(updates.order);
    }
    if (updates.isActive !== undefined) {
      fields.push("isActive = ?");
      values.push(updates.isActive ? 1 : 0);
    }
    fields.push("updatedAt = ?");
    values.push(now);
    values.push(id);

    await executeQuery(
      `UPDATE team_members SET ${fields.join(", ")} WHERE id = ?`,
      values
    );
    const results = await executeQuery<TeamMember[]>(
      "SELECT * FROM team_members WHERE id = ?",
      [id]
    );
    if (results[0]) {
      results[0].socialLinks = JSON.parse(results[0].socialLinks as any);
    }
    return results[0] || null;
  }

  async deleteTeamMember(id: string): Promise<boolean> {
    const result = await executeQuery<any>(
      "DELETE FROM team_members WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  // Project methods
  async getProjects(): Promise<Project[]> {
    const results = await executeQuery<Project[]>(
      "SELECT * FROM projects WHERE isActive = 1 ORDER BY `order` ASC"
    );
    return results;
  }

  async createProject(project: Omit<Project, "id" | "createdAt" | "updatedAt">): Promise<Project> {
    const id = `project-${Date.now()}`;
    const now = new Date().toISOString();
    await executeQuery(
      "INSERT INTO projects (id, title, category, imageUrl, description, `order`, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id,
        project.title,
        project.category,
        project.imageUrl,
        project.description || null,
        project.order,
        project.isActive ? 1 : 0,
        now,
        now,
      ]
    );
    return { ...project, id, createdAt: now, updatedAt: now };
  }

  async updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
    const now = new Date().toISOString();
    const fields: string[] = [];
    const values: any[] = [];

    if (updates.title !== undefined) {
      fields.push("title = ?");
      values.push(updates.title);
    }
    if (updates.category !== undefined) {
      fields.push("category = ?");
      values.push(updates.category);
    }
    if (updates.imageUrl !== undefined) {
      fields.push("imageUrl = ?");
      values.push(updates.imageUrl);
    }
    if (updates.description !== undefined) {
      fields.push("description = ?");
      values.push(updates.description);
    }
    if (updates.order !== undefined) {
      fields.push("`order` = ?");
      values.push(updates.order);
    }
    if (updates.isActive !== undefined) {
      fields.push("isActive = ?");
      values.push(updates.isActive ? 1 : 0);
    }
    fields.push("updatedAt = ?");
    values.push(now);
    values.push(id);

    await executeQuery(
      `UPDATE projects SET ${fields.join(", ")} WHERE id = ?`,
      values
    );
    const results = await executeQuery<Project[]>(
      "SELECT * FROM projects WHERE id = ?",
      [id]
    );
    return results[0] || null;
  }

  async deleteProject(id: string): Promise<boolean> {
    const result = await executeQuery<any>(
      "DELETE FROM projects WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  // Blog Post methods
  async getBlogPosts(): Promise<BlogPost[]> {
    const results = await executeQuery<BlogPost[]>(
      "SELECT * FROM blog_posts WHERE isActive = 1 ORDER BY `order` ASC"
    );
    return results;
  }

  async createBlogPost(post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): Promise<BlogPost> {
    const id = `blog-${Date.now()}`;
    const now = new Date().toISOString();
    await executeQuery(
      "INSERT INTO blog_posts (id, title, description, imageUrl, date, content, author, `order`, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id,
        post.title,
        post.description,
        post.imageUrl,
        post.date,
        post.content || null,
        post.author || null,
        post.order,
        post.isActive ? 1 : 0,
        now,
        now,
      ]
    );
    return { ...post, id, createdAt: now, updatedAt: now };
  }

  async updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
    const now = new Date().toISOString();
    const fields: string[] = [];
    const values: any[] = [];

    if (updates.title !== undefined) {
      fields.push("title = ?");
      values.push(updates.title);
    }
    if (updates.description !== undefined) {
      fields.push("description = ?");
      values.push(updates.description);
    }
    if (updates.imageUrl !== undefined) {
      fields.push("imageUrl = ?");
      values.push(updates.imageUrl);
    }
    if (updates.date !== undefined) {
      fields.push("date = ?");
      values.push(updates.date);
    }
    if (updates.content !== undefined) {
      fields.push("content = ?");
      values.push(updates.content);
    }
    if (updates.author !== undefined) {
      fields.push("author = ?");
      values.push(updates.author);
    }
    if (updates.order !== undefined) {
      fields.push("`order` = ?");
      values.push(updates.order);
    }
    if (updates.isActive !== undefined) {
      fields.push("isActive = ?");
      values.push(updates.isActive ? 1 : 0);
    }
    fields.push("updatedAt = ?");
    values.push(now);
    values.push(id);

    await executeQuery(
      `UPDATE blog_posts SET ${fields.join(", ")} WHERE id = ?`,
      values
    );
    const results = await executeQuery<BlogPost[]>(
      "SELECT * FROM blog_posts WHERE id = ?",
      [id]
    );
    return results[0] || null;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    const result = await executeQuery<any>(
      "DELETE FROM blog_posts WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  // Client Logo methods
  async getClientLogos(): Promise<ClientLogo[]> {
    const results = await executeQuery<ClientLogo[]>(
      "SELECT * FROM client_logos WHERE isActive = 1 ORDER BY `order` ASC"
    );
    return results;
  }

  async createClientLogo(logo: Omit<ClientLogo, "id" | "createdAt" | "updatedAt">): Promise<ClientLogo> {
    const id = `client-${Date.now()}`;
    const now = new Date().toISOString();
    await executeQuery(
      "INSERT INTO client_logos (id, name, imageUrl, link, `order`, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id,
        logo.name,
        logo.imageUrl || null,
        logo.link || null,
        logo.order,
        logo.isActive ? 1 : 0,
        now,
        now,
      ]
    );
    return { ...logo, id, createdAt: now, updatedAt: now };
  }

  async updateClientLogo(id: string, updates: Partial<ClientLogo>): Promise<ClientLogo | null> {
    const now = new Date().toISOString();
    const fields: string[] = [];
    const values: any[] = [];

    if (updates.name !== undefined) {
      fields.push("name = ?");
      values.push(updates.name);
    }
    if (updates.imageUrl !== undefined) {
      fields.push("imageUrl = ?");
      values.push(updates.imageUrl);
    }
    if (updates.link !== undefined) {
      fields.push("link = ?");
      values.push(updates.link);
    }
    if (updates.order !== undefined) {
      fields.push("`order` = ?");
      values.push(updates.order);
    }
    if (updates.isActive !== undefined) {
      fields.push("isActive = ?");
      values.push(updates.isActive ? 1 : 0);
    }
    fields.push("updatedAt = ?");
    values.push(now);
    values.push(id);

    await executeQuery(
      `UPDATE client_logos SET ${fields.join(", ")} WHERE id = ?`,
      values
    );
    const results = await executeQuery<ClientLogo[]>(
      "SELECT * FROM client_logos WHERE id = ?",
      [id]
    );
    return results[0] || null;
  }

  async deleteClientLogo(id: string): Promise<boolean> {
    const result = await executeQuery<any>(
      "DELETE FROM client_logos WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  // Hero Section methods
  async getHeroSection(): Promise<HeroSection | null> {
    const results = await executeQuery<HeroSection[]>(
      "SELECT * FROM hero_section WHERE isActive = 1 LIMIT 1"
    );
    return results[0] || null;
  }

  async setHeroSection(hero: Omit<HeroSection, "id" | "createdAt" | "updatedAt">): Promise<HeroSection> {
    const existing = await this.getHeroSection();
    const now = new Date().toISOString();

    if (existing) {
      await executeQuery(
        "UPDATE hero_section SET headline = ?, subheadline = ?, backgroundImageUrl = ?, ctaText = ?, ctaLink = ?, isActive = ?, updatedAt = ? WHERE id = ?",
        [
          hero.headline,
          hero.subheadline,
          hero.backgroundImageUrl,
          hero.ctaText,
          hero.ctaLink,
          hero.isActive ? 1 : 0,
          now,
          existing.id,
        ]
      );
      return { ...existing, ...hero, updatedAt: now };
    } else {
      const id = "hero-1";
      await executeQuery(
        "INSERT INTO hero_section (id, headline, subheadline, backgroundImageUrl, ctaText, ctaLink, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          id,
          hero.headline,
          hero.subheadline,
          hero.backgroundImageUrl,
          hero.ctaText,
          hero.ctaLink,
          hero.isActive ? 1 : 0,
          now,
          now,
        ]
      );
      return { ...hero, id, createdAt: now, updatedAt: now };
    }
  }

  // About Section methods
  async getAboutSection(): Promise<AboutSection | null> {
    const results = await executeQuery<AboutSection[]>(
      "SELECT * FROM about_section WHERE isActive = 1 LIMIT 1"
    );
    return results[0] || null;
  }

  async setAboutSection(about: Omit<AboutSection, "id" | "createdAt" | "updatedAt">): Promise<AboutSection> {
    const existing = await this.getAboutSection();
    const now = new Date().toISOString();
    const features = JSON.stringify(about.features || []);

    if (existing) {
      await executeQuery(
        "UPDATE about_section SET title = ?, description = ?, features = ?, ceoName = ?, ceoRole = ?, ceoImageUrl = ?, ceoPhone = ?, isActive = ?, updatedAt = ? WHERE id = ?",
        [
          about.title,
          about.description,
          features,
          about.ceoName,
          about.ceoRole,
          about.ceoImageUrl,
          about.ceoPhone,
          about.isActive ? 1 : 0,
          now,
          existing.id,
        ]
      );
      return { ...existing, ...about, updatedAt: now };
    } else {
      const id = "about-1";
      await executeQuery(
        "INSERT INTO about_section (id, title, description, features, ceoName, ceoRole, ceoImageUrl, ceoPhone, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          id,
          about.title,
          about.description,
          features,
          about.ceoName,
          about.ceoRole,
          about.ceoImageUrl,
          about.ceoPhone,
          about.isActive ? 1 : 0,
          now,
          now,
        ]
      );
      return { ...about, id, createdAt: now, updatedAt: now };
    }
  }

  // Statistics methods
  async getStatistics(): Promise<Statistic[]> {
    const results = await executeQuery<Statistic[]>(
      "SELECT * FROM statistics WHERE isActive = 1 ORDER BY `order` ASC"
    );
    return results;
  }

  async createStatistic(stat: Omit<Statistic, "id" | "createdAt" | "updatedAt">): Promise<Statistic> {
    const id = `stat-${Date.now()}`;
    const now = new Date().toISOString();
    await executeQuery(
      "INSERT INTO statistics (id, number, label, `order`, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        id,
        stat.number,
        stat.label,
        stat.order,
        stat.isActive ? 1 : 0,
        now,
        now,
      ]
    );
    return { ...stat, id, createdAt: now, updatedAt: now };
  }

  async updateStatistic(id: string, updates: Partial<Statistic>): Promise<Statistic | null> {
    const now = new Date().toISOString();
    const fields: string[] = [];
    const values: any[] = [];

    if (updates.number !== undefined) {
      fields.push("number = ?");
      values.push(updates.number);
    }
    if (updates.label !== undefined) {
      fields.push("label = ?");
      values.push(updates.label);
    }
    if (updates.order !== undefined) {
      fields.push("`order` = ?");
      values.push(updates.order);
    }
    if (updates.isActive !== undefined) {
      fields.push("isActive = ?");
      values.push(updates.isActive ? 1 : 0);
    }
    fields.push("updatedAt = ?");
    values.push(now);
    values.push(id);

    await executeQuery(
      `UPDATE statistics SET ${fields.join(", ")} WHERE id = ?`,
      values
    );
    const results = await executeQuery<Statistic[]>(
      "SELECT * FROM statistics WHERE id = ?",
      [id]
    );
    return results[0] || null;
  }

  async deleteStatistic(id: string): Promise<boolean> {
    const result = await executeQuery<any>(
      "DELETE FROM statistics WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  // Footer methods
  async getFooter(): Promise<Footer | null> {
    const results = await executeQuery<Footer[]>(
      "SELECT * FROM footer WHERE isActive = 1 LIMIT 1"
    );
    if (results[0]) {
      results[0].services = JSON.parse(results[0].services as any);
      results[0].socialLinks = JSON.parse(results[0].socialLinks as any);
    }
    return results[0] || null;
  }

  async setFooter(footer: Omit<Footer, "id" | "createdAt" | "updatedAt">): Promise<Footer> {
    const existing = await this.getFooter();
    const now = new Date().toISOString();
    const services = JSON.stringify(footer.services || []);
    const socialLinks = JSON.stringify(footer.socialLinks || {});

    if (existing) {
      await executeQuery(
        "UPDATE footer SET description = ?, services = ?, officeAddress = ?, officePhone = ?, socialLinks = ?, copyright = ?, isActive = ?, updatedAt = ? WHERE id = ?",
        [
          footer.description,
          services,
          footer.officeAddress,
          footer.officePhone,
          socialLinks,
          footer.copyright,
          footer.isActive ? 1 : 0,
          now,
          existing.id,
        ]
      );
      return { ...existing, ...footer, updatedAt: now };
    } else {
      const id = "footer-1";
      await executeQuery(
        "INSERT INTO footer (id, description, services, officeAddress, officePhone, socialLinks, copyright, isActive, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          id,
          footer.description,
          services,
          footer.officeAddress,
          footer.officePhone,
          socialLinks,
          footer.copyright,
          footer.isActive ? 1 : 0,
          now,
          now,
        ]
      );
      return { ...footer, id, createdAt: now, updatedAt: now };
    }
  }
}

export const db = new MySQLDatabase();


