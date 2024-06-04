import { NextRequest, NextResponse } from "next/server";
import { getIdeas } from "@/drizzle/idea";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { limit, offset, search } = body;

  const ideas = await getIdeas({ limit, offset, query: search });

  if (ideas) {
    return NextResponse.json({
      data: ideas,
    });
  } else {
    return NextResponse.json({
      error: "Something went wrong",
    });
  }
}
