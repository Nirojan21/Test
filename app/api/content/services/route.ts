import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db-selector";

export async function GET() {
  try {
    const services = await db.getServices();
    return NextResponse.json({ success: true, data: services }, { status: 200 });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { icon, title, description, order = 0, isActive = true } = body;

    if (!icon || !title || !description) {
      return NextResponse.json(
        { success: false, error: "Icon, title, and description are required" },
        { status: 400 }
      );
    }

    const service = await db.createService({ icon, title, description, order, isActive });
    return NextResponse.json({ success: true, data: service }, { status: 201 });
  } catch (error) {
    console.error("Error creating service:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create service" },
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
        { success: false, error: "Service ID is required" },
        { status: 400 }
      );
    }

    const updated = await db.updateService(id, updates);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    console.error("Error updating service:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update service" },
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
        { success: false, error: "Service ID is required" },
        { status: 400 }
      );
    }

    const deleted = await db.deleteService(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Service deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting service:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete service" },
      { status: 500 }
    );
  }
}

