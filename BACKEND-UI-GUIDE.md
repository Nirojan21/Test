# Backend UI Guide

## How to Check Backend UI

### Method 1: Admin Panel (Recommended)

1. **Start the server:**
   ```bash
   npm run dev
   ```
   Or use: `start-backend.bat`

2. **Open Admin Panel:**
   - Navigate to: `http://localhost:3000/admin`
   - Or click "Admin" in the navigation menu

3. **Features:**
   - Health Check - Test server status
   - Appointment - Test appointment API with form
   - Subscribe - Test newsletter subscription
   - Real-time results with JSON responses
   - Visual success/error indicators

### Method 2: Direct API Endpoints

Open these URLs directly in your browser:

- **Health Check:** `http://localhost:3000/api/health`
- **Appointment Info:** `http://localhost:3000/api/appointment`
- **Subscribe Info:** `http://localhost:3000/api/subscribe`

### Method 3: Browser Developer Tools

1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Make requests from the website forms
4. View API responses in the Network tab

### Method 4: Using cURL (Command Line)

```bash
# Health Check
curl http://localhost:3000/api/health

# Test Appointment
curl -X POST http://localhost:3000/api/appointment \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'

# Test Subscribe
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### Method 5: Using Batch File

Run `test-backend.bat` to automatically test all endpoints.

## Admin Panel Features

### Health Check Section
- One-click server status check
- View API information
- See uptime and environment details

### Appointment Section
- Fill in name, email, and message
- Test POST request
- View response with status code
- See validation errors if any

### Subscribe Section
- Enter email address
- Test subscription endpoint
- View success/error responses

## Quick Access

- **Admin Panel:** `http://localhost:3000/admin`
- **Home Page:** `http://localhost:3000`
- **API Health:** `http://localhost:3000/api/health`

## Tips

1. Keep the server running while testing
2. Check browser console for any errors
3. Use the Admin Panel for visual testing
4. Use cURL for automated testing
5. Check Network tab in DevTools for detailed request/response info


