import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db-selector";

export async function GET() {
  try {
    const members = await db.getTeamMembers();
    return NextResponse.json({ success: true, data: members }, { status: 200 });
  } catch (error) {
    console.error("Error fetching team members:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch team members" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, role, imageUrl, socialLinks, order = 0, isActive = true } = body;

    if (!name || !role || !imageUrl) {
      return NextResponse.json(
        { success: false, error: "Name, role, and imageUrl are required" },
        { status: 400 }
      );
    }

    const member = await db.createTeamMember({
      name,
      role,
      imageUrl,
      socialLinks: socialLinks || {},
      order,
      isActive,
    });
    return NextResponse.json({ success: true, data: member }, { status: 201 });
  } catch (error) {
    console.error("Error creating team member:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create team member" },
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
        { success: false, error: "Team member ID is required" },
        { status: 400 }
      );
    }

    const updated = await db.updateTeamMember(id, updates);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Team member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    console.error("Error updating team member:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update team member" },
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
        { success: false, error: "Team member ID is required" },
        { status: 400 }
      );
    }

    const deleted = await db.deleteTeamMember(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Team member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Team member deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting team member:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete team member" },
      { status: 500 }
    );
  }
}

