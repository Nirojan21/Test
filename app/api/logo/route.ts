import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db-selector";

// GET - Get all active logos
export async function GET() {
  try {
    const logos = await db.getLogos();
    return NextResponse.json({ success: true, data: logos }, { status: 200 });
  } catch (error) {
    console.error("Error fetching logos:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch logos" },
      { status: 500 }
    );
  }
}

// POST - Create new logo
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, imageUrl, link, isActive = true } = body;

    if (!text || !link) {
      return NextResponse.json(
        { success: false, error: "Text and link are required" },
        { status: 400 }
      );
    }

    const logo = await db.createLogo({
      text,
      imageUrl,
      link,
      isActive,
    });

    return NextResponse.json({ success: true, data: logo }, { status: 201 });
  } catch (error) {
    console.error("Error creating logo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create logo" },
      { status: 500 }
    );
  }
}

// PUT - Update logo
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Logo ID is required" },
        { status: 400 }
      );
    }

    const updated = await db.updateLogo(id, updates);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Logo not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    console.error("Error updating logo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update logo" },
      { status: 500 }
    );
  }
}

// DELETE - Delete logo
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Logo ID is required" },
        { status: 400 }
      );
    }

    const deleted = await db.deleteLogo(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Logo not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Logo deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting logo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete logo" },
      { status: 500 }
    );
  }
}

