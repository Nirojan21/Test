import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db-selector";

export async function GET() {
  try {
    const hero = await db.getHeroSection();
    return NextResponse.json({ success: true, data: hero }, { status: 200 });
  } catch (error) {
    console.error("Error fetching hero section:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch hero section" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { headline, subheadline, backgroundImageUrl, ctaText, ctaLink, isActive = true } = body;

    if (!headline || !subheadline || !backgroundImageUrl || !ctaText || !ctaLink) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const hero = await db.setHeroSection({
      headline,
      subheadline,
      backgroundImageUrl,
      ctaText,
      ctaLink,
      isActive,
    });
    return NextResponse.json({ success: true, data: hero }, { status: 201 });
  } catch (error) {
    console.error("Error creating/updating hero section:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save hero section" },
      { status: 500 }
    );
  }
}

