import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db-selector";

// GET - Get all active menu items
export async function GET() {
  try {
    const menuItems = await db.getMenuItems();
    return NextResponse.json({ success: true, data: menuItems }, { status: 200 });
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch menu items" },
      { status: 500 }
    );
  }
}

// POST - Create new menu item
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, href, order = 0, isActive = true, isExternal = false, icon } = body;

    if (!name || !href) {
      return NextResponse.json(
        { success: false, error: "Name and href are required" },
        { status: 400 }
      );
    }

    const menuItem = await db.createMenuItem({
      name,
      href,
      order,
      isActive,
      isExternal,
      icon,
    });

    return NextResponse.json({ success: true, data: menuItem }, { status: 201 });
  } catch (error) {
    console.error("Error creating menu item:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create menu item" },
      { status: 500 }
    );
  }
}

// PUT - Update menu item
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Menu item ID is required" },
        { status: 400 }
      );
    }

    const updated = await db.updateMenuItem(id, updates);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Menu item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    console.error("Error updating menu item:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update menu item" },
      { status: 500 }
    );
  }
}

// DELETE - Delete menu item
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Menu item ID is required" },
        { status: 400 }
      );
    }

    const deleted = await db.deleteMenuItem(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Menu item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Menu item deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting menu item:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete menu item" },
      { status: 500 }
    );
  }
}

