import { NextRequest, NextResponse } from "next/server";

// Input validation and sanitization
function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateInput(name: string, email: string, message: string): { valid: boolean; error?: string } {
  if (!name || !email || !message) {
    return { valid: false, error: "All fields are required" };
  }

  if (name.length < 2 || name.length > 100) {
    return { valid: false, error: "Name must be between 2 and 100 characters" };
  }

  if (!validateEmail(email)) {
    return { valid: false, error: "Invalid email address" };
  }

  if (message.length < 10 || message.length > 1000) {
    return { valid: false, error: "Message must be between 10 and 1000 characters" };
  }

  return { valid: true };
}

// GET method for testing
export async function GET() {
  return NextResponse.json(
    {
      message: "Appointment API endpoint",
      method: "POST",
      requiredFields: ["name", "email", "message"],
      example: {
        name: "John Doe",
        email: "john@example.com",
        message: "I would like to schedule an appointment",
      },
    },
    { status: 200 }
  );
}

// POST method for appointment submission
export async function POST(request: NextRequest) {
  try {
    // Check content type
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 400 }
      );
    }

    const body = await request.json();
    let { name, email, message } = body;

    // Sanitize inputs
    name = sanitizeInput(name || "");
    email = sanitizeInput(email || "");
    message = sanitizeInput(message || "");

    // Validate inputs
    const validation = validateInput(name, email, message);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database (e.g., MongoDB, PostgreSQL, etc.)
    // 2. Send email notification (e.g., SendGrid, Resend, Nodemailer)
    // 3. Add to CRM system
    // 4. Create calendar event
    // 5. Send confirmation email to user

    // Log the appointment request
    const appointmentData = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
    };

    console.log("Appointment request received:", appointmentData);

    // Simulate processing delay (remove in production or replace with actual DB operation)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Appointment request received successfully",
        data: {
          id: `APT-${Date.now()}`,
          timestamp: appointmentData.timestamp,
        },
      },
      { 
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON format" },
        { status: 400 }
      );
    }

    console.error("Error processing appointment:", error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: "Failed to process appointment request. Please try again later.",
      },
      { status: 500 }
    );
  }
}

