# Axela Business Agency - Next.js Full Stack Application

A modern, responsive business agency website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion animations.

## Features

- 🚀 Next.js 14 with App Router (new model)
- 💅 Tailwind CSS for styling
- 🎨 Framer Motion animations
- 📱 Fully responsive design
- 🔧 TypeScript for type safety
- 🎯 Backend API routes
- ⚡ Server-side rendering

## Quick Start

### Option 1: Using Batch Files (Windows)

**Start Full Stack Server:**
- Double-click `start-server.bat` or `start-server.cmd` - Starts frontend + backend

**Start Backend-Focused Server:**
- Double-click `start-backend.bat` - Starts server with backend API verification

**Test Backend API:**
- Double-click `test-backend.bat` - Tests API endpoints (requires server to be running)

### Option 2: Using Command Line

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/              # App Router pages and layouts
│   ├── api/         # Backend API routes
│   ├── globals.css  # Global styles
│   ├── layout.tsx   # Root layout
│   └── page.tsx     # Home page
├── components/       # React components
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
├── public/          # Static assets
├── start-server.bat # Quick start script (Windows)
├── start-backend.bat # Backend-focused server script
├── test-backend.bat # Backend API testing script
└── BACKEND.md # Complete backend API documentation
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Build for Production

```bash
npm run build
npm start
```

## API Endpoints

### Content Management APIs
- `GET/POST/PUT/DELETE /api/logo` - Logo management
- `GET/POST/PUT/DELETE /api/menu` - Menu items management
- `GET/POST/PUT/DELETE /api/content/services` - Services management
- `GET/POST/PUT/DELETE /api/content/team` - Team members management
- `GET/POST/PUT/DELETE /api/content/projects` - Projects management
- `GET/POST/PUT/DELETE /api/content/blog` - Blog posts management
- `GET/POST/PUT/DELETE /api/content/clients` - Client logos management
- `GET/POST /api/content/hero` - Hero section management
- `GET/POST /api/content/about` - About section management
- `GET/POST/PUT/DELETE /api/content/statistics` - Statistics management
- `GET/POST /api/content/footer` - Footer management

### Form Submission APIs
- `GET /api/health` - Health check endpoint
- `GET/POST /api/appointment` - Submit appointment form
- `GET/POST /api/subscribe` - Subscribe to newsletter

See [BACKEND.md](./BACKEND.md) for form API documentation.
See [BACKEND-SCHEMAS.md](./BACKEND-SCHEMAS.md) for content management API documentation.

**Backend Admin UI:** Visit `http://localhost:3000/admin` to test all API endpoints visually.

**Editing Guide:** See [EDITING-GUIDE.md](./EDITING-GUIDE.md) for complete guide on editing frontend and backend.
**Quick Edit:** See [QUICK-EDIT.md](./QUICK-EDIT.md) for quick reference on common edits.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright @2021 Axela. By RaxaThemes
