import { NextResponse } from "next/server";

/**
 * Health check endpoint
 * GET /api/health
 * Returns server status and API information
 */
export async function GET() {
  try {
    const healthData = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "development",
      version: "1.0.0",
      api: {
        endpoints: [
          {
            path: "/api/appointment",
            method: "POST",
            description: "Submit appointment request",
          },
          {
            path: "/api/subscribe",
            method: "POST",
            description: "Subscribe to newsletter",
          },
          {
            path: "/api/health",
            method: "GET",
            description: "Health check endpoint",
          },
        ],
      },
    };

    return NextResponse.json(healthData, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Health check error:", error);
    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: "Health check failed",
      },
      { status: 503 }
    );
  }
}


