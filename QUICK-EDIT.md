# Quick Edit Reference

## 🎯 Most Common Edits

### Change Company Name
**File:** `components/Header.tsx` (Line ~30)
```tsx
<span className="text-2xl font-bold">axela</span>
```
Change "axela" to your company name.

---

### Change Contact Email
**Files to edit:**
1. `components/TopBar.tsx` (Line ~15)
2. `components/CallToAction.tsx` (Line ~45)
3. `components/Footer.tsx` (if needed)

```tsx
<a href="mailto:info@example.com">info@example.com</a>
```

---

### Change Phone Number
**Files to edit:**
1. `components/TopBar.tsx` (Line ~18)
2. `components/AboutUs.tsx` (Line ~140)
3. `components/CallToAction.tsx` (Line ~55)

```tsx
<a href="tel:+210-3860-8880">+210-3860-8880</a>
```

---

### Change Hero Section Text
**File:** `components/Hero.tsx`
- Line ~40: Main headline
- Line ~35: Sub-headline
- Line ~50: Button text

---

### Add/Edit Services
**File:** `components/Services.tsx` (Line ~10)
```tsx
const services = [
  {
    icon: Megaphone,  // Change icon
    title: "Your Service",  // Change title
    description: "Your description...",  // Change description
  },
];
```

---

### Add/Edit Team Members
**File:** `components/ExpertTeam.tsx` (Line ~8)
```tsx
const teamMembers = [
  {
    name: "Your Name",
    role: "Your Role",
    image: "https://...",  // Image URL
  },
];
```

---

### Add/Edit Projects
**File:** `components/ProjectGallery.tsx` (Line ~8)
```tsx
const projects = [
  {
    image: "https://...",  // Image URL
    title: "Project Title",
    category: "Category",
  },
];
```

---

### Change Colors
**File:** `tailwind.config.ts` (Line ~8)
```typescript
colors: {
  primary: {
    DEFAULT: "#1e40af",  // Main color (blue)
    dark: "#1e3a8a",     // Dark shade
    light: "#3b82f6",    // Light shade
  },
}
```

---

### Edit Backend Validation
**File:** `app/api/appointment/route.ts` (Line ~13)
```typescript
// Change validation rules
if (name.length < 2 || name.length > 100) { ... }
if (message.length < 10 || message.length > 1000) { ... }
```

---

### Edit Backend Response Messages
**File:** `app/api/appointment/route.ts` (Line ~104)
```typescript
message: "Appointment request received successfully"
// Change success message
```

**File:** `app/api/subscribe/route.ts` (Line ~96)
```typescript
message: "Successfully subscribed to newsletter"
// Change success message
```

---

## 📁 File Locations Quick Reference

| What to Edit | File Location |
|-------------|---------------|
| Company Name | `components/Header.tsx` |
| Contact Info | `components/TopBar.tsx` |
| Hero Text | `components/Hero.tsx` |
| Services | `components/Services.tsx` |
| Team Members | `components/ExpertTeam.tsx` |
| Projects | `components/ProjectGallery.tsx` |
| Blog Posts | `components/BlogNews.tsx` |
| Footer | `components/Footer.tsx` |
| Colors | `tailwind.config.ts` |
| Styles | `app/globals.css` |
| Appointment API | `app/api/appointment/route.ts` |
| Subscribe API | `app/api/subscribe/route.ts` |
| Health API | `app/api/health/route.ts` |

---

## ⚡ Quick Actions

### To Add New Section:
1. Create `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add `<NewSection />` to page

### To Change API Endpoint:
1. Edit route in `app/api/[name]/route.ts`
2. Update frontend fetch URL in component

### To Add Database:
1. Install database package (e.g., `npm install mongodb`)
2. Add connection code in API route
3. Replace console.log with database save

### To Add Email Service:
1. Install email package (e.g., `npm install nodemailer`)
2. Add email code in API route
3. Configure SMTP settings

---

**All files are fully editable!** Just open any file and make your changes.


