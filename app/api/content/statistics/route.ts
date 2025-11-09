import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db-selector";

export async function GET() {
  try {
    const stats = await db.getStatistics();
    return NextResponse.json({ success: true, data: stats }, { status: 200 });
  } catch (error) {
    console.error("Error fetching statistics:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch statistics" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { number, label, order = 0, isActive = true } = body;

    if (!number || !label) {
      return NextResponse.json(
        { success: false, error: "Number and label are required" },
        { status: 400 }
      );
    }

    const stat = await db.createStatistic({ number, label, order, isActive });
    return NextResponse.json({ success: true, data: stat }, { status: 201 });
  } catch (error) {
    console.error("Error creating statistic:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create statistic" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Statistic ID is required" },
        { status: 400 }
      );
    }

    const updated = await db.updateStatistic(id, updates);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Statistic not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    console.error("Error updating statistic:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update statistic" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Statistic ID is required" },
        { status: 400 }
      );
    }

    const deleted = await db.deleteStatistic(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Statistic not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Statistic deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting statistic:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete statistic" },
      { status: 500 }
    );
  }
}

