import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db-selector";

export async function GET() {
  try {
    const about = await db.getAboutSection();
    return NextResponse.json({ success: true, data: about }, { status: 200 });
  } catch (error) {
    console.error("Error fetching about section:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch about section" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      features,
      ceoName,
      ceoRole,
      ceoImageUrl,
      ceoPhone,
      isActive = true,
    } = body;

    if (!title || !description || !features || !ceoName || !ceoRole || !ceoImageUrl || !ceoPhone) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const about = await db.setAboutSection({
      title,
      description,
      features: Array.isArray(features) ? features : [],
      ceoName,
      ceoRole,
      ceoImageUrl,
      ceoPhone,
      isActive,
    });
    return NextResponse.json({ success: true, data: about }, { status: 201 });
  } catch (error) {
    console.error("Error creating/updating about section:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save about section" },
      { status: 500 }
    );
  }
}

