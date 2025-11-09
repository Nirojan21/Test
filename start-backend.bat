@echo off
title Axela Business Agency - Backend Server
color 0B

echo.
echo ========================================
echo   Axela Business Agency - Backend Server
echo   Next.js API Routes + Frontend
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [BACKEND] Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo [ERROR] Failed to install dependencies!
        pause
        exit /b 1
    )
    echo [SUCCESS] Dependencies installed!
    echo.
)

REM Check if API routes exist
if not exist "app\api" (
    echo [WARNING] API directory not found!
    pause
    exit /b 1
)

echo [BACKEND] API Routes Available:
if exist "app\api\health\route.ts" (
    echo   [OK] GET  /api/health
) else (
    echo   [MISSING] /api/health
)

if exist "app\api\appointment\route.ts" (
    echo   [OK] GET/POST /api/appointment
) else (
    echo   [MISSING] /api/appointment
)

if exist "app\api\subscribe\route.ts" (
    echo   [OK] GET/POST /api/subscribe
) else (
    echo   [MISSING] /api/subscribe
)

echo.
echo [INFO] Starting Next.js server with backend API...
echo [INFO] Frontend: http://localhost:3000
echo [INFO] Backend API: http://localhost:3000/api
echo [INFO] API Endpoints:
echo   - GET  http://localhost:3000/api/health
echo   - GET/POST http://localhost:3000/api/appointment
echo   - GET/POST http://localhost:3000/api/subscribe
echo.
echo [INFO] Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

call npm run dev

if errorlevel 1 (
    echo.
    echo [ERROR] Server failed to start!
    echo [INFO] Check the error messages above
    pause
    exit /b 1
)

pause

