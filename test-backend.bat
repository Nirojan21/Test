@echo off
title Test Backend API Routes
color 0E

echo.
echo ========================================
echo   Testing Backend API Routes
echo ========================================
echo.

REM Check if server is running
echo [TEST] Checking if server is running on http://localhost:3000...
curl -s http://localhost:3000 >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Server is not running!
    echo [INFO] Please start the server first using start-backend.bat
    pause
    exit /b 1
)

echo [SUCCESS] Server is running!
echo.

REM Test appointment endpoint
echo [TEST] Testing POST /api/appointment...
curl -X POST http://localhost:3000/api/appointment ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"message\":\"Test message\"}" ^
  -s -o test-appointment-response.json

if errorlevel 1 (
    echo [ERROR] Failed to test appointment endpoint
) else (
    echo [SUCCESS] Appointment endpoint responded
    type test-appointment-response.json
    del test-appointment-response.json
)

echo.

REM Test subscribe endpoint
echo [TEST] Testing POST /api/subscribe...
curl -X POST http://localhost:3000/api/subscribe ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@example.com\"}" ^
  -s -o test-subscribe-response.json

if errorlevel 1 (
    echo [ERROR] Failed to test subscribe endpoint
) else (
    echo [SUCCESS] Subscribe endpoint responded
    type test-subscribe-response.json
    del test-subscribe-response.json
)

echo.
echo ========================================
echo [INFO] Backend API tests completed!
echo ========================================
echo.

pause


