# How to Run SQL Script

Complete guide on running `scripts/create-tables.sql` to set up your MySQL database.

---

## 🚀 Method 1: Using Batch Script (Easiest - Windows)

### Quick Run:
```bash
scripts\run-sql.bat
```

This script will:
- ✅ Prompt for MySQL username and password
- ✅ Create the database automatically
- ✅ Import all tables
- ✅ Show success/error messages

---

## 💻 Method 2: Using MySQL Command Line

### Step 1: Open MySQL Command Line
```bash
mysql -u root -p
```
Enter your MySQL password when prompted.

### Step 2: Create Database
```sql
CREATE DATABASE axela_db;
USE axela_db;
```

### Step 3: Run SQL Script
**Option A - From MySQL prompt:**
```sql
SOURCE scripts/create-tables.sql;
```

**Option B - From Windows Command Prompt:**
```bash
mysql -u root -p axela_db < scripts/create-tables.sql
```

**Option C - From PowerShell:**
```powershell
Get-Content scripts/create-tables.sql | mysql -u root -p axela_db
```

---

## 🖥️ Method 3: Using MySQL Workbench (GUI)

1. **Open MySQL Workbench**
2. **Connect to your MySQL server**
3. **Create Database:**
   - Click "Create a new schema" (database icon)
   - Name: `axela_db`
   - Click "Apply"
4. **Run SQL Script:**
   - File → Open SQL Script
   - Select `scripts/create-tables.sql`
   - Click "Execute" (lightning bolt icon)
   - Or press `Ctrl+Shift+Enter`

---

## 📋 Method 4: Using phpMyAdmin (Web Interface)

1. **Open phpMyAdmin** in your browser
2. **Create Database:**
   - Click "New" in left sidebar
   - Database name: `axela_db`
   - Collation: `utf8mb4_unicode_ci`
   - Click "Create"
3. **Import SQL:**
   - Select `axela_db` database
   - Click "Import" tab
   - Choose file: `scripts/create-tables.sql`
   - Click "Go"

---

## 🔧 Method 5: Copy-Paste SQL Commands

1. **Open** `scripts/create-tables.sql` in a text editor
2. **Copy** all the SQL code
3. **Open** MySQL command line or MySQL Workbench
4. **Paste** and execute

---

## ✅ Verify Tables Created

After running the script, verify tables were created:

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

---

## 🐛 Troubleshooting

### Error: "Access denied"
- Check MySQL username and password
- Verify user has CREATE DATABASE permission
- Try: `mysql -u root -p` (with password)

### Error: "Database already exists"
- Either drop existing: `DROP DATABASE axela_db;`
- Or use: `CREATE DATABASE IF NOT EXISTS axela_db;`

### Error: "Table already exists"
- Drop existing tables first
- Or modify SQL script to use `CREATE TABLE IF NOT EXISTS`

### Error: "File not found"
- Make sure you're in the project root directory
- Check file path: `scripts/create-tables.sql`
- Use absolute path if needed

### Error: "Syntax error"
- Check MySQL version (should be 5.7+ or 8.0+)
- Verify SQL file encoding (should be UTF-8)

---

## 📝 Quick Command Reference

```bash
# Create database only
mysql -u root -p -e "CREATE DATABASE axela_db;"

# Import SQL file
mysql -u root -p axela_db < scripts/create-tables.sql

# Check if database exists
mysql -u root -p -e "SHOW DATABASES LIKE 'axela_db';"

# Check tables
mysql -u root -p -e "USE axela_db; SHOW TABLES;"
```

---

## 🎯 Recommended Method

**For Windows users:** Use `scripts\run-sql.bat` (Method 1)
- Easiest and most user-friendly
- Handles errors gracefully
- Shows clear messages

**For advanced users:** Use MySQL Command Line (Method 2)
- More control
- Can see detailed output
- Good for debugging

---

## ✅ After Running SQL

1. **Verify** tables were created (see above)
2. **Configure** `.env` file with database credentials
3. **Start** your server: `npm run dev`
4. **Check** console for: `🗄️ Using MySQL database: axela_db`

---

**Choose the method that works best for you!** 🚀


