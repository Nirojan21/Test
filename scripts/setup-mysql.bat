@echo off
title MySQL Setup for Axela
color 0B

echo.
echo ========================================
echo   MySQL Database Setup
echo ========================================
echo.

REM Check if .env exists
if not exist ".env" (
    echo [INFO] Creating .env file from .env.example...
    if exist ".env.example" (
        copy .env.example .env
        echo [INFO] Please edit .env file with your MySQL credentials
    ) else (
        echo [INFO] Creating new .env file...
        (
            echo # MySQL Database Configuration
            echo DB_HOST=localhost
            echo DB_USER=root
            echo DB_PASSWORD=your_password
            echo DB_NAME=axela_db
            echo.
            echo # Next.js Configuration
            echo NODE_ENV=development
        ) > .env
        echo [INFO] Please edit .env file with your MySQL credentials
    )
    echo.
)

REM Install MySQL dependencies
echo [INFO] Installing MySQL dependencies...
call npm install mysql2
if errorlevel 1 (
    echo [ERROR] Failed to install mysql2
    pause
    exit /b 1
)

echo [SUCCESS] MySQL dependencies installed!
echo.

echo [INFO] Next steps:
echo 1. Edit .env file with your MySQL credentials
echo 2. Create MySQL database: CREATE DATABASE axela_db;
echo 3. Run SQL script: mysql -u root -p axela_db ^< scripts\create-tables.sql
echo 4. Restart your server
echo.

pause


