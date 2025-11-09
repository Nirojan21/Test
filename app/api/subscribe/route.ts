import { NextRequest, NextResponse } from "next/server";

// Input validation and sanitization
function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase().replace(/[<>]/g, "");
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// GET method for testing
export async function GET() {
  return NextResponse.json(
    {
      message: "Newsletter subscription API endpoint",
      method: "POST",
      requiredFields: ["email"],
      example: {
        email: "user@example.com",
      },
    },
    { status: 200 }
  );
}

// POST method for newsletter subscription
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
    let { email } = body;

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Sanitize email
    email = sanitizeEmail(email);

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check for common disposable email domains (optional)
    const disposableDomains = ["tempmail.com", "throwaway.email"];
    const domain = email.split("@")[1];
    if (disposableDomains.includes(domain)) {
      return NextResponse.json(
        { error: "Disposable email addresses are not allowed" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database (newsletter subscribers table)
    // 2. Add to email marketing service (e.g., Mailchimp, ConvertKit, SendGrid, etc.)
    // 3. Send confirmation email with double opt-in
    // 4. Check for duplicate subscriptions
    // 5. Add to analytics/tracking

    // Log the subscription
    const subscriptionData = {
      email,
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    };

    console.log("Newsletter subscription:", subscriptionData);

    // Simulate processing delay (remove in production or replace with actual DB operation)
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to newsletter",
        data: {
          email,
          subscribedAt: subscriptionData.timestamp,
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

    console.error("Error processing subscription:", error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: "Failed to process subscription. Please try again later.",
      },
      { status: 500 }
    );
  }
}

