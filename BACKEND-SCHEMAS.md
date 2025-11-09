# Backend Schemas & API Documentation

Complete documentation for all content management API endpoints.

## 📋 Available Schemas

1. **Logo** - Company logo management
2. **MenuItem** - Navigation menu items
3. **Service** - Service cards
4. **TeamMember** - Team members
5. **Project** - Project gallery items
6. **BlogPost** - Blog/news posts
7. **ClientLogo** - Client/partner logos
8. **HeroSection** - Hero section content
9. **AboutSection** - About section content
10. **Statistic** - Statistics/numbers
11. **Footer** - Footer content

---

## 🔗 API Endpoints

### Logo Management

**GET** `/api/logo` - Get all active logos
**POST** `/api/logo` - Create new logo
**PUT** `/api/logo` - Update logo
**DELETE** `/api/logo?id={id}` - Delete logo

**Request Body (POST/PUT):**
```json
{
  "text": "axela",
  "imageUrl": "https://...",
  "link": "/",
  "isActive": true
}
```

---

### Menu Items Management

**GET** `/api/menu` - Get all active menu items (ordered)
**POST** `/api/menu` - Create new menu item
**PUT** `/api/menu` - Update menu item
**DELETE** `/api/menu?id={id}` - Delete menu item

**Request Body (POST/PUT):**
```json
{
  "name": "Home",
  "href": "/",
  "order": 0,
  "isActive": true,
  "isExternal": false,
  "icon": "home"
}
```

---

### Services Management

**GET** `/api/content/services` - Get all active services
**POST** `/api/content/services` - Create new service
**PUT** `/api/content/services` - Update service
**DELETE** `/api/content/services?id={id}` - Delete service

**Request Body (POST/PUT):**
```json
{
  "icon": "Megaphone",
  "title": "Online Marketing",
  "description": "Your service description...",
  "order": 0,
  "isActive": true
}
```

---

### Team Members Management

**GET** `/api/content/team` - Get all active team members
**POST** `/api/content/team` - Create new team member
**PUT** `/api/content/team` - Update team member
**DELETE** `/api/content/team?id={id}` - Delete team member

**Request Body (POST/PUT):**
```json
{
  "name": "John Doe",
  "role": "CEO",
  "imageUrl": "https://...",
  "socialLinks": {
    "facebook": "https://...",
    "twitter": "https://...",
    "linkedin": "https://...",
    "instagram": "https://..."
  },
  "order": 0,
  "isActive": true
}
```

---

### Projects Management

**GET** `/api/content/projects` - Get all active projects
**POST** `/api/content/projects` - Create new project
**PUT** `/api/content/projects` - Update project
**DELETE** `/api/content/projects?id={id}` - Delete project

**Request Body (POST/PUT):**
```json
{
  "title": "Project Title",
  "category": "Branding",
  "imageUrl": "https://...",
  "description": "Project description...",
  "order": 0,
  "isActive": true
}
```

---

### Blog Posts Management

**GET** `/api/content/blog` - Get all active blog posts
**POST** `/api/content/blog` - Create new blog post
**PUT** `/api/content/blog` - Update blog post
**DELETE** `/api/content/blog?id={id}` - Delete blog post

**Request Body (POST/PUT):**
```json
{
  "title": "Blog Post Title",
  "description": "Short description...",
  "imageUrl": "https://...",
  "date": "20 Oct, 2022",
  "content": "Full blog content...",
  "author": "Author Name",
  "order": 0,
  "isActive": true
}
```

---

### Client Logos Management

**GET** `/api/content/clients` - Get all active client logos
**POST** `/api/content/clients` - Create new client logo
**PUT** `/api/content/clients` - Update client logo
**DELETE** `/api/content/clients?id={id}` - Delete client logo

**Request Body (POST/PUT):**
```json
{
  "name": "Client Name",
  "imageUrl": "https://...",
  "link": "https://...",
  "order": 0,
  "isActive": true
}
```

---

### Hero Section Management

**GET** `/api/content/hero` - Get hero section
**POST** `/api/content/hero` - Create/update hero section

**Request Body (POST):**
```json
{
  "headline": "Main Headline",
  "subheadline": "Sub headline text",
  "backgroundImageUrl": "https://...",
  "ctaText": "Get Started",
  "ctaLink": "/contact",
  "isActive": true
}
```

---

### About Section Management

**GET** `/api/content/about` - Get about section
**POST** `/api/content/about` - Create/update about section

**Request Body (POST):**
```json
{
  "title": "We Can Bring Your Business to #1",
  "description": "About description...",
  "features": [
    "24/7 Call Services Available",
    "Great Skilled Consultant"
  ],
  "ceoName": "Andrew David",
  "ceoRole": "CEO & Founder",
  "ceoImageUrl": "https://...",
  "ceoPhone": "+256-21650-2166",
  "isActive": true
}
```

---

### Statistics Management

**GET** `/api/content/statistics` - Get all active statistics
**POST** `/api/content/statistics` - Create new statistic
**PUT** `/api/content/statistics` - Update statistic
**DELETE** `/api/content/statistics?id={id}` - Delete statistic

**Request Body (POST/PUT):**
```json
{
  "number": "650+",
  "label": "Project Working",
  "order": 0,
  "isActive": true
}
```

---

### Footer Management

**GET** `/api/content/footer` - Get footer
**POST** `/api/content/footer` - Create/update footer

**Request Body (POST):**
```json
{
  "description": "Footer description...",
  "services": [
    "Branding Design",
    "Website Development"
  ],
  "officeAddress": "255 Project Dakota Road, California Newyork",
  "officePhone": "(256) 2165 2166",
  "socialLinks": {
    "facebook": "https://...",
    "twitter": "https://...",
    "linkedin": "https://...",
    "instagram": "https://..."
  },
  "copyright": "Copyright @2021 Axela. By RaxaThemes",
  "isActive": true
}
```

---

## 📝 Response Format

All endpoints return JSON in this format:

**Success:**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error:**
```json
{
  "success": false,
  "error": "Error message"
}
```

---

## 🔧 Usage Examples

### Create Logo
```bash
curl -X POST http://localhost:3000/api/logo \
  -H "Content-Type: application/json" \
  -d '{"text":"axela","link":"/","isActive":true}'
```

### Get Menu Items
```bash
curl http://localhost:3000/api/menu
```

### Create Service
```bash
curl -X POST http://localhost:3000/api/content/services \
  -H "Content-Type: application/json" \
  -d '{"icon":"Megaphone","title":"Online Marketing","description":"...","order":0,"isActive":true}'
```

### Update Menu Item
```bash
curl -X PUT http://localhost:3000/api/menu \
  -H "Content-Type: application/json" \
  -d '{"id":"menu-123","name":"Updated Name","href":"/new"}'
```

### Delete Project
```bash
curl -X DELETE http://localhost:3000/api/content/projects?id=project-123
```

---

## 🗄️ Database Integration

Currently using in-memory storage. To integrate with a real database:

1. Replace `lib/database.ts` with your database client
2. Update CRUD methods to use database queries
3. Add connection pooling and error handling

**Example with MongoDB:**
```typescript
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
// Replace in-memory methods with MongoDB operations
```

---

## ✅ Features

- ✅ Full CRUD operations for all content types
- ✅ Ordering support (order field)
- ✅ Active/inactive status (isActive)
- ✅ Validation and error handling
- ✅ TypeScript types and schemas
- ✅ Ready for database integration

---

## 📚 Schema Definitions

All schemas are defined in `lib/schemas.ts` with TypeScript interfaces.

See the file for complete type definitions and field descriptions.


