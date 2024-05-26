import { deleteProduct } from "@/drizzle/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name } = body;

  const deleted = await deleteProduct({ name });

  if (deleted) {
    return NextResponse.json({
      data: { message: `${name} has been deleted` },
    });
  } else {
    return NextResponse.json({
      error: "Something went wrong",
    });
  }
}
