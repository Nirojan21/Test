# MySQL Command Not Found - Fix Guide

## 🔍 Problem
`'mysql' is not recognized as an internal or external command`

This means MySQL command-line tools are not in your system PATH.

---

## ✅ Solution Options

### Option 1: Find MySQL Installation Path

MySQL is likely installed but not in PATH. Common locations:

**MySQL Server:**
- `C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe`
- `C:\Program Files\MySQL\MySQL Server 8.1\bin\mysql.exe`
- `C:\Program Files\MySQL\MySQL Server 5.7\bin\mysql.exe`

**XAMPP:**
- `C:\xampp\mysql\bin\mysql.exe`

**WAMP:**
- `C:\wamp64\bin\mysql\mysql8.0.xx\bin\mysql.exe`

**MAMP:**
- `C:\MAMP\bin\mysql\bin\mysql.exe`

---

### Option 2: Use Full Path in Command

Once you find MySQL, use the full path:

```bash
"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p axela_db < scripts\create-tables.sql
```

Or update the batch script with the path.

---

### Option 3: Add MySQL to System PATH (Recommended)

1. **Find MySQL installation:**
   - Search for `mysql.exe` in File Explorer
   - Or check: `C:\Program Files\MySQL\`

2. **Add to PATH:**
   - Right-click "This PC" → Properties
   - Advanced System Settings
   - Environment Variables
   - Under "System Variables", find "Path"
   - Click "Edit" → "New"
   - Add: `C:\Program Files\MySQL\MySQL Server 8.0\bin`
   - Click OK on all dialogs
   - **Restart Command Prompt/PowerShell**

3. **Verify:**
   ```bash
   mysql --version
   ```

---

### Option 4: Use MySQL Workbench (Easiest - No PATH needed)

1. **Download MySQL Workbench** (if not installed)
   - https://dev.mysql.com/downloads/workbench/

2. **Open MySQL Workbench**

3. **Connect to your MySQL server**

4. **Create Database:**
   - Click "Create a new schema" (database icon)
   - Name: `axela_db`
   - Click "Apply"

5. **Run SQL Script:**
   - File → Open SQL Script
   - Select `scripts/create-tables.sql`
   - Click "Execute" (lightning bolt icon)
   - Or press `Ctrl+Shift+Enter`

---

### Option 5: Use phpMyAdmin (If using XAMPP/WAMP)

1. **Start XAMPP/WAMP** (Apache + MySQL)

2. **Open phpMyAdmin:**
   - http://localhost/phpmyadmin

3. **Create Database:**
   - Click "New" in left sidebar
   - Database name: `axela_db`
   - Collation: `utf8mb4_unicode_ci`
   - Click "Create"

4. **Import SQL:**
   - Select `axela_db` database
   - Click "Import" tab
   - Choose file: `scripts/create-tables.sql`
   - Click "Go"

---

### Option 6: Copy-Paste SQL (Any MySQL Client)

1. **Open** `scripts/create-tables.sql` in Notepad/VS Code

2. **Copy** all SQL code (Ctrl+A, Ctrl+C)

3. **Open any MySQL client:**
   - MySQL Workbench
   - phpMyAdmin
   - DBeaver
   - HeidiSQL
   - Any SQL client

4. **Connect** to MySQL server

5. **Create database:**
   ```sql
   CREATE DATABASE axela_db;
   USE axela_db;
   ```

6. **Paste and execute** the SQL code

---

## 🚀 Quick Fix Script

I've created `scripts/run-sql-fixed.bat` that:
- ✅ Detects if MySQL is in PATH
- ✅ Prompts for MySQL path if not found
- ✅ Uses full path if provided
- ✅ Shows alternative methods if MySQL not found

**Try it:**
```bash
scripts\run-sql-fixed.bat
```

---

## 📋 Step-by-Step: Add MySQL to PATH

### Windows 10/11:

1. **Search for "Environment Variables"** in Start menu

2. **Click "Edit the system environment variables"**

3. **Click "Environment Variables" button**

4. **Under "System variables", select "Path" → Click "Edit"**

5. **Click "New" → Add your MySQL bin path:**
   ```
   C:\Program Files\MySQL\MySQL Server 8.0\bin
   ```
   (Replace with your actual MySQL path)

6. **Click OK on all dialogs**

7. **Close and reopen Command Prompt/PowerShell**

8. **Test:**
   ```bash
   mysql --version
   ```

---

## ✅ Recommended Solution

**For most users:** Use **MySQL Workbench** (Option 4)
- ✅ No PATH configuration needed
- ✅ Visual interface
- ✅ Easy to use
- ✅ Free download

**For developers:** Add MySQL to PATH (Option 3)
- ✅ Works from command line
- ✅ Better for automation
- ✅ One-time setup

---

## 🔍 Find MySQL Installation

**Search in File Explorer:**
1. Open File Explorer
2. Go to `C:\Program Files\MySQL\`
3. Look for folders like `MySQL Server 8.0` or `MySQL Server 8.1`
4. Navigate to `bin` folder
5. Check if `mysql.exe` exists there

**Or search:**
- Press `Win + S`
- Type "mysql"
- Look for MySQL Server or MySQL Workbench

---

## 📝 After Fixing

Once MySQL is accessible, run:
```bash
scripts\run-sql-fixed.bat
```

Or manually:
```bash
mysql -u root -p axela_db < scripts\create-tables.sql
```

---

**Choose the option that works best for your setup!** 🚀


