# Backend API Documentation

Complete backend API documentation for Axela Business Agency.

## Base URL

```
http://localhost:3000/api
```

## Endpoints

### 1. Health Check

**GET** `/api/health`

Check server status and API information.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 12345,
  "environment": "development",
  "version": "1.0.0",
  "api": {
    "endpoints": [...]
  }
}
```

---

### 2. Appointment Request

**POST** `/api/appointment`

Submit an appointment request.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I would like to schedule an appointment"
}
```

**Validation Rules:**
- `name`: Required, 2-100 characters
- `email`: Required, valid email format
- `message`: Required, 10-1000 characters

**Success Response (200):**
```json
{
  "success": true,
  "message": "Appointment request received successfully",
  "data": {
    "id": "APT-1234567890",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Responses:**

- **400 Bad Request:**
```json
{
  "error": "All fields are required"
}
```

- **500 Internal Server Error:**
```json
{
  "error": "Internal server error",
  "message": "Failed to process appointment request. Please try again later."
}
```

**GET** `/api/appointment`

Get endpoint information and example.

---

### 3. Newsletter Subscription

**POST** `/api/subscribe`

Subscribe to newsletter.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Validation Rules:**
- `email`: Required, valid email format
- Disposable email addresses are blocked

**Success Response (200):**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter",
  "data": {
    "email": "user@example.com",
    "subscribedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Responses:**

- **400 Bad Request:**
```json
{
  "error": "Invalid email address"
}
```

- **500 Internal Server Error:**
```json
{
  "error": "Internal server error",
  "message": "Failed to process subscription. Please try again later."
}
```

**GET** `/api/subscribe`

Get endpoint information and example.

---

## Features

### Security
- ✅ Input sanitization
- ✅ Input validation
- ✅ XSS protection
- ✅ Content-Type validation
- ✅ Error handling

### Data Processing
- ✅ Request logging
- ✅ IP tracking
- ✅ Timestamp recording
- ✅ User agent tracking

### Future Enhancements
- Database integration (MongoDB, PostgreSQL)
- Email service integration (SendGrid, Resend)
- Rate limiting
- Authentication/Authorization
- File upload support
- Webhook support

## Testing

### Using cURL

**Test Health Check:**
```bash
curl http://localhost:3000/api/health
```

**Test Appointment:**
```bash
curl -X POST http://localhost:3000/api/appointment \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","message":"Test message"}'
```

**Test Subscribe:**
```bash
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com"}'
```

### Using Batch File

Run `test-backend.bat` to automatically test all endpoints.

## Error Codes

- `200` - Success
- `400` - Bad Request (validation error)
- `500` - Internal Server Error

## Notes

- All endpoints require `Content-Type: application/json` header
- All timestamps are in ISO 8601 format
- Inputs are automatically sanitized
- Email addresses are normalized (lowercase, trimmed)


