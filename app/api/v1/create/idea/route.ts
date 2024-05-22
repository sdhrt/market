import { createIdea } from "@/drizzle/idea";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, description, creatorName, creatorEmail } = body;

  try {
    const { ok } = await createIdea({
      title,
      description,
      creatorEmail,
      creatorName,
    });

    if (ok) {
      return NextResponse.json({
        data: { message: `Your idea has been uploaded has been uploaded` },
      });
    }
  } catch (error) {
        console.error(error)
    return NextResponse.json({
      error: "Something went wrong",
    });
  }
}
