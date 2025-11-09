@echo off
title Axela Business Agency - Full Stack Server
color 0A

echo.
echo ========================================
echo   Axela Business Agency - Next.js
echo   Full Stack Development Server
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo [ERROR] Failed to install dependencies!
        pause
        exit /b 1
    )
    echo [SUCCESS] Dependencies installed!
    echo.
)

echo [INFO] Starting Next.js Full Stack Server...
echo [INFO] Frontend: http://localhost:3000
echo [INFO] Backend API: http://localhost:3000/api
echo.
echo [API Endpoints:]
echo   - POST /api/appointment (Appointment Form)
echo   - POST /api/subscribe (Newsletter Subscription)
echo.
echo [INFO] Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

call npm run dev

if errorlevel 1 (
    echo.
    echo [ERROR] Server failed to start!
    pause
    exit /b 1
)

pause
