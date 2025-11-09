import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db-selector";

export async function GET() {
  try {
    const clients = await db.getClientLogos();
    return NextResponse.json({ success: true, data: clients }, { status: 200 });
  } catch (error) {
    console.error("Error fetching client logos:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch client logos" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, imageUrl, link, order = 0, isActive = true } = body;

    if (!name) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    const client = await db.createClientLogo({ name, imageUrl, link, order, isActive });
    return NextResponse.json({ success: true, data: client }, { status: 201 });
  } catch (error) {
    console.error("Error creating client logo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create client logo" },
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
        { success: false, error: "Client logo ID is required" },
        { status: 400 }
      );
    }

    const updated = await db.updateClientLogo(id, updates);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Client logo not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    console.error("Error updating client logo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update client logo" },
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
        { success: false, error: "Client logo ID is required" },
        { status: 400 }
      );
    }

    const deleted = await db.deleteClientLogo(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Client logo not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Client logo deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting client logo:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete client logo" },
      { status: 500 }
    );
  }
}

