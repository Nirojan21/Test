import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db-selector";

export async function GET() {
  try {
    const posts = await db.getBlogPosts();
    return NextResponse.json({ success: true, data: posts }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, imageUrl, date, content, author, order = 0, isActive = true } = body;

    if (!title || !description || !imageUrl || !date) {
      return NextResponse.json(
        { success: false, error: "Title, description, imageUrl, and date are required" },
        { status: 400 }
      );
    }

    const post = await db.createBlogPost({
      title,
      description,
      imageUrl,
      date,
      content,
      author,
      order,
      isActive,
    });
    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create blog post" },
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
        { success: false, error: "Blog post ID is required" },
        { status: 400 }
      );
    }

    const updated = await db.updateBlogPost(id, updates);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updated }, { status: 200 });
  } catch (error) {
    console.error("Error updating blog post:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update blog post" },
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
        { success: false, error: "Blog post ID is required" },
        { status: 400 }
      );
    }

    const deleted = await db.deleteBlogPost(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Blog post deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}

