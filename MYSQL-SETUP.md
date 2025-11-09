# MySQL Database Setup Guide

## 📦 Step 1: Install MySQL Dependencies

```bash
npm install mysql2
npm install --save-dev @types/mysql2
```

## 🗄️ Step 2: Create MySQL Database

### Option A: Using MySQL Command Line

```bash
mysql -u root -p
```

Then run:
```sql
CREATE DATABASE axela_db;
USE axela_db;
```

### Option B: Using SQL Script

```bash
mysql -u root -p < scripts/create-tables.sql
```

Or import the SQL file in phpMyAdmin/MySQL Workbench.

## ⚙️ Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Edit `.env` with your MySQL credentials:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=axela_db
```

## 🔄 Step 4: Switch to MySQL Database

Update `lib/database.ts` to use MySQL:

**Option 1: Replace the entire file**
```typescript
// Export MySQL database instead of in-memory
export { db } from "./database-mysql";
```

**Option 2: Create a conditional export**

Create `lib/database.ts`:
```typescript
// Use MySQL if DB_HOST is set, otherwise use in-memory
if (process.env.DB_HOST) {
  export { db } from "./database-mysql";
} else {
  export { db } from "./database";
}
```

## ✅ Step 5: Test Connection

Create a test file `scripts/test-connection.ts`:

```typescript
import { testConnection } from "../lib/mysql";

testConnection().then((success) => {
  if (success) {
    console.log("✅ Database connection successful!");
    process.exit(0);
  } else {
    console.log("❌ Database connection failed!");
    process.exit(1);
  }
});
```

Run:
```bash
npx tsx scripts/test-connection.ts
```

## 📋 Step 6: Create Tables

Run the SQL script to create all tables:

```bash
mysql -u root -p axela_db < scripts/create-tables.sql
```

Or execute the SQL file in your MySQL client.

## 🚀 Step 7: Start Your Application

```bash
npm run dev
```

The application will now use MySQL database instead of in-memory storage.

## 🔍 Verify Tables Created

```sql
USE axela_db;
SHOW TABLES;
```

You should see:
- logos
- menu_items
- services
- team_members
- projects
- blog_posts
- client_logos
- hero_section
- about_section
- statistics
- footer
- appointments
- subscriptions

## 📝 API Usage

All API endpoints will now save to MySQL:

```bash
# Create a menu item
curl -X POST http://localhost:3000/api/menu \
  -H "Content-Type: application/json" \
  -d '{"name":"Home","href":"/","order":0,"isActive":true}'

# Get all menu items
curl http://localhost:3000/api/menu
```

## 🛠️ Troubleshooting

### Connection Error
- Check MySQL is running: `mysql -u root -p`
- Verify credentials in `.env`
- Check firewall/port (default: 3306)

### Table Not Found
- Run `scripts/create-tables.sql`
- Check database name matches `.env`

### Permission Denied
- Grant privileges: `GRANT ALL ON axela_db.* TO 'root'@'localhost';`

## 🔒 Security Notes

1. **Never commit `.env` file** - It's in `.gitignore`
2. **Use strong passwords** in production
3. **Limit database user permissions** in production
4. **Use connection pooling** (already configured)
5. **Enable SSL** for production connections

## 📚 Next Steps

1. ✅ Install mysql2 package
2. ✅ Create database
3. ✅ Configure `.env`
4. ✅ Switch to MySQL database
5. ✅ Test connection
6. ✅ Create tables
7. ✅ Start using MySQL!

---

**Your MySQL integration is ready!**


