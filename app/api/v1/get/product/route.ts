import { getProduct } from "@/drizzle/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { id } = body;

  const product = await getProduct(id);

  if (product) {
    return NextResponse.json({
      data: product,
    });
  } else {
    return NextResponse.json({
      error: "Something went wrong",
    });
  }
}
