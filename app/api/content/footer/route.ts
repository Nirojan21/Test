import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db-selector";

export async function GET() {
  try {
    const footer = await db.getFooter();
    return NextResponse.json({ success: true, data: footer }, { status: 200 });
  } catch (error) {
    console.error("Error fetching footer:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch footer" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      description,
      services,
      officeAddress,
      officePhone,
      socialLinks,
      copyright,
      isActive = true,
    } = body;

    if (!description || !services || !officeAddress || !officePhone || !copyright) {
      return NextResponse.json(
        { success: false, error: "All required fields must be provided" },
        { status: 400 }
      );
    }

    const footer = await db.setFooter({
      description,
      services: Array.isArray(services) ? services : [],
      officeAddress,
      officePhone,
      socialLinks: socialLinks || {},
      copyright,
      isActive,
    });
    return NextResponse.json({ success: true, data: footer }, { status: 201 });
  } catch (error) {
    console.error("Error creating/updating footer:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save footer" },
      { status: 500 }
    );
  }
}

