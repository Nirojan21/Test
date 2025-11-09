# Frontend & Backend Editing Guide

Complete guide to editing all frontend components and backend API routes.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main homepage (editable)
│   ├── layout.tsx          # Root layout (editable)
│   ├── globals.css         # Global styles (editable)
│   ├── admin/              # Admin panel (editable)
│   └── api/                # Backend API routes (editable)
│       ├── health/         # Health check endpoint
│       ├── appointment/    # Appointment API
│       └── subscribe/      # Newsletter API
├── components/             # React components (all editable)
│   ├── TopBar.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── AboutUs.tsx
│   ├── Services.tsx
│   ├── CallToAction.tsx
│   ├── ProjectGallery.tsx
│   ├── AppointmentStats.tsx
│   ├── ExpertTeam.tsx
│   ├── BlogNews.tsx
│   ├── ClientLogos.tsx
│   └── Footer.tsx
└── public/                 # Static assets (editable)
```

---

## 🎨 Frontend Components (All Editable)

### 1. **TopBar.tsx** - Top Contact Bar
**Location:** `components/TopBar.tsx`

**What you can edit:**
- Contact email: `info@example.com`
- Phone number: `+210-3860-8880`
- Top bar message text
- Colors and styling

**Key editable sections:**
```tsx
// Line ~10: Contact information
<a href="mailto:info@example.com">info@example.com</a>
<a href="tel:+210-3860-8880">+210-3860-8880</a>

// Line ~6: Top bar message
<span>We are providing your creative business solutions...</span>
```

---

### 2. **Header.tsx** - Navigation Header
**Location:** `components/Header.tsx`

**What you can edit:**
- Navigation menu items
- Logo text and styling
- Contact button text
- Mobile menu behavior

**Key editable sections:**
```tsx
// Line ~10-17: Navigation items
const navItems = [
  { name: "Home", href: "/" },
  { name: "Pages", href: "#pages" },
  // Add/remove/edit items here
];

// Line ~30: Logo
<span className="text-2xl font-bold">axela</span>
```

---

### 3. **Hero.tsx** - Hero Section
**Location:** `components/Hero.tsx`

**What you can edit:**
- Main headline text
- Sub-headline text
- Background image URL
- CTA button text
- Gradient colors

**Key editable sections:**
```tsx
// Line ~40: Main headline
<h1>Hallo! We are Solve Your Creative Business</h1>

// Line ~35: Sub-headline
<p>A Complete Business Solution for Everyone</p>

// Line ~25: Background image
backgroundImage: "url('https://images.unsplash.com/...')"
```

---

### 4. **AboutUs.tsx** - About Section
**Location:** `components/AboutUs.tsx`

**What you can edit:**
- Section title
- Description text
- Feature list items
- CEO information
- Images URLs

**Key editable sections:**
```tsx
// Line ~60: Features array
const features = [
  "24/7 Call Services Available",
  "Great Skilled Consultant",
  // Add/edit features here
];

// Line ~120: CEO info
<p className="font-semibold">Andrew David</p>
<p className="text-sm">CEO & Founder</p>
```

---

### 5. **Services.tsx** - Services Section
**Location:** `components/Services.tsx`

**What you can edit:**
- Service cards (add/remove/edit)
- Icons (from lucide-react)
- Service descriptions
- Section title

**Key editable sections:**
```tsx
// Line ~10: Services array
const services = [
  {
    icon: Megaphone,
    title: "Online Marketing",
    description: "Your description here...",
  },
  // Add more services here
];
```

---

### 6. **CallToAction.tsx** - CTA Section
**Location:** `components/CallToAction.tsx`

**What you can edit:**
- CTA headline
- Contact email
- Phone number
- Background image

---

### 7. **ProjectGallery.tsx** - Project Gallery
**Location:** `components/ProjectGallery.tsx`

**What you can edit:**
- Project items (add/remove/edit)
- Project images
- Project titles and categories

**Key editable sections:**
```tsx
// Line ~8: Projects array
const projects = [
  {
    image: "https://...",
    title: "Digital Startup Agency",
    category: "Branding",
  },
  // Add more projects
];
```

---

### 8. **AppointmentStats.tsx** - Appointment Form
**Location:** `components/AppointmentStats.tsx`

**What you can edit:**
- Form fields (add/remove)
- Statistics numbers
- Section titles
- API endpoint (if changed)

**Key editable sections:**
```tsx
// Line ~22: API endpoint
fetch("/api/appointment", { ... })

// Line ~43: Statistics
const stats = [
  { number: "650+", label: "Project Working" },
  // Edit numbers and labels
];
```

---

### 9. **ExpertTeam.tsx** - Team Section
**Location:** `components/ExpertTeam.tsx`

**What you can edit:**
- Team members (add/remove/edit)
- Member photos
- Names and roles
- Social media links

**Key editable sections:**
```tsx
// Line ~8: Team members array
const teamMembers = [
  {
    name: "Alan Doson",
    role: "UI Designer",
    image: "https://...",
  },
  // Add more team members
];
```

---

### 10. **BlogNews.tsx** - Blog Section
**Location:** `components/BlogNews.tsx`

**What you can edit:**
- Blog posts (add/remove/edit)
- Post images
- Titles and descriptions
- Dates

**Key editable sections:**
```tsx
// Line ~8: Blog posts array
const blogPosts = [
  {
    image: "https://...",
    date: "20 Oct, 2022",
    title: "How to improve your business",
    description: "Your description...",
  },
  // Add more posts
];
```

---

### 11. **ClientLogos.tsx** - Client Logos
**Location:** `components/ClientLogos.tsx`

**What you can edit:**
- Client names
- Logo images (replace text with images)

**Key editable sections:**
```tsx
// Line ~5: Clients array
const clients = ["Darleo", "Clarity", "Adden", ...];
```

---

### 12. **Footer.tsx** - Footer
**Location:** `components/Footer.tsx`

**What you can edit:**
- Footer description
- Services list
- Office address
- Phone number
- Social media links
- Copyright text
- Newsletter API endpoint

**Key editable sections:**
```tsx
// Line ~40: Services list
const services = [
  "Branding Design",
  "Website Development",
  // Edit services
];

// Line ~19: Newsletter API
fetch("/api/subscribe", { ... })
```

---

## 🔧 Backend API Routes (All Editable)

### 1. **Health Check API**
**Location:** `app/api/health/route.ts`

**What you can edit:**
- Health check response data
- API version
- Endpoint information
- Status information

**Key editable sections:**
```typescript
// Line ~10: Health data structure
const healthData = {
  status: "healthy",
  version: "1.0.0",
  // Edit response structure
};
```

---

### 2. **Appointment API**
**Location:** `app/api/appointment/route.ts`

**What you can edit:**
- Validation rules (name length, message length)
- Email validation regex
- Input sanitization
- Response messages
- Database integration (add your DB code)
- Email sending (add email service)

**Key editable sections:**
```typescript
// Line ~13: Validation rules
function validateInput(name: string, email: string, message: string) {
  if (name.length < 2 || name.length > 100) {
    // Edit min/max lengths
  }
  if (message.length < 10 || message.length > 1000) {
    // Edit message limits
  }
}

// Line ~79: Add database integration
// 1. Save to database (e.g., MongoDB, PostgreSQL, etc.)
// 2. Send email notification (e.g., SendGrid, Resend, Nodemailer)
// Add your code here
```

---

### 3. **Subscribe API**
**Location:** `app/api/subscribe/route.ts`

**What you can edit:**
- Email validation
- Disposable email blocking
- Newsletter service integration
- Response messages
- Database integration

**Key editable sections:**
```typescript
// Line ~63: Disposable email domains
const disposableDomains = ["tempmail.com", "throwaway.email"];
// Add more domains to block

// Line ~72: Add newsletter service
// 1. Save to database
// 2. Add to email marketing service (Mailchimp, ConvertKit, etc.)
// Add your integration code here
```

---

## 🎨 Styling & Configuration

### **Global Styles**
**Location:** `app/globals.css`

**What you can edit:**
- Color scheme
- Font families
- Scrollbar styling
- Custom utilities

### **Tailwind Config**
**Location:** `tailwind.config.ts`

**What you can edit:**
- Color palette
- Custom theme extensions
- Breakpoints

**Key editable sections:**
```typescript
// Line ~8: Color scheme
colors: {
  primary: {
    DEFAULT: "#1e40af",  // Edit primary color
    dark: "#1e3a8a",
    light: "#3b82f6",
  },
}
```

---

## 📝 Main Page Configuration

### **Homepage**
**Location:** `app/page.tsx`

**What you can edit:**
- Component order
- Add/remove sections
- Page structure

**Key editable sections:**
```tsx
// Line ~16: Component order
<main>
  <TopBar />
  <Header />
  <Hero />
  // Reorder or add/remove components
</main>
```

---

## 🔗 API Integration Points

### Frontend → Backend Connections:

1. **Appointment Form** (`AppointmentStats.tsx`)
   - Calls: `POST /api/appointment`
   - Sends: `{ name, email, message }`

2. **Newsletter Form** (`Footer.tsx`)
   - Calls: `POST /api/subscribe`
   - Sends: `{ email }`

3. **Admin Panel** (`app/admin/page.tsx`)
   - Tests all API endpoints
   - Visual testing interface

---

## 🛠️ Quick Edit Checklist

### To Change Colors:
1. Edit `tailwind.config.ts` → `colors.primary`
2. Update component classes if needed

### To Add New Section:
1. Create new component in `components/`
2. Import in `app/page.tsx`
3. Add to page structure

### To Modify API:
1. Edit route file in `app/api/[endpoint]/route.ts`
2. Update validation/sanitization
3. Add database/email integration

### To Change Content:
1. Find component file
2. Edit text, images, or data arrays
3. Save and see changes

---

## 📚 Additional Resources

- **Backend Documentation:** See `BACKEND.md`
- **Backend UI Guide:** See `BACKEND-UI-GUIDE.md`
- **API Testing:** Visit `http://localhost:3000/admin`

---

## ✅ All Files Are Editable

Every file in this project can be edited:
- ✅ All components
- ✅ All API routes
- ✅ Configuration files
- ✅ Styles
- ✅ Content

Just open any file and make your changes!


