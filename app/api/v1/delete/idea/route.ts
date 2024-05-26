import { deleteIdea } from "@/drizzle/idea";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { id } = body;

  const deleted = await deleteIdea({ id });

  if (deleted) {
    return NextResponse.json({
      data: { message: `Idea has been deleted` },
    });
  } else {
    return NextResponse.json({
      error: "Something went wrong",
    });
  }
}
