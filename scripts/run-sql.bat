@echo off
title Run MySQL SQL Script
color 0A

echo.
echo ========================================
echo   Running MySQL SQL Script
echo ========================================
echo.

REM Check if MySQL is in PATH
where mysql >nul 2>&1
if errorlevel 1 (
    echo [ERROR] MySQL command-line tools not found in PATH
    echo.
    echo [INFO] Common MySQL installation paths:
    echo   - C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe
    echo   - C:\Program Files\MySQL\MySQL Server 8.1\bin\mysql.exe
    echo   - C:\xampp\mysql\bin\mysql.exe
    echo   - C:\wamp64\bin\mysql\mysql8.0.xx\bin\mysql.exe
    echo.
    set /p MYSQL_PATH="Enter full path to mysql.exe (or press Enter for alternatives): "
    if "%MYSQL_PATH%"=="" (
        echo.
        echo [INFO] Alternative methods:
        echo   1. Use MySQL Workbench (GUI) - Easiest!
        echo   2. Use phpMyAdmin (if using XAMPP/WAMP)
        echo   3. Add MySQL to system PATH
        echo   4. Copy-paste SQL into any MySQL client
        echo.
        echo See MYSQL-NOT-FOUND-FIX.md for detailed instructions
        pause
        exit /b 1
    )
    set MYSQL_CMD="%MYSQL_PATH%"
) else (
    set MYSQL_CMD=mysql
)

REM Check if .env exists
if exist ".env" (
    echo [INFO] Found .env file
    echo [INFO] Using credentials from .env
    echo.
) else (
    echo [WARNING] .env file not found
    echo [INFO] You'll need to enter MySQL credentials manually
    echo.
)

echo [INFO] Running SQL script: scripts\create-tables.sql
echo [INFO] This will create the database and all tables
echo.

REM Prompt for MySQL credentials
set /p DB_USER="Enter MySQL username (default: root): "
if "%DB_USER%"=="" set DB_USER=root

set /p DB_NAME="Enter database name (default: axela_db): "
if "%DB_NAME%"=="" set DB_NAME=axela_db

echo.
echo [INFO] Creating database: %DB_NAME%
%MYSQL_CMD% -u %DB_USER% -p -e "CREATE DATABASE IF NOT EXISTS %DB_NAME%;"

if errorlevel 1 (
    echo [ERROR] Failed to create database
    pause
    exit /b 1
)

echo.
echo [INFO] Importing tables into: %DB_NAME%
%MYSQL_CMD% -u %DB_USER% -p %DB_NAME% < scripts\create-tables.sql

if errorlevel 1 (
    echo [ERROR] Failed to import SQL script
    pause
    exit /b 1
)

echo.
echo [SUCCESS] SQL script executed successfully!
echo [INFO] Database '%DB_NAME%' is ready to use
echo.

pause

