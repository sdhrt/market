import { createProduct } from "@/drizzle/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, price, description, images, seller } = body;

  const { ok } = await createProduct({
    name,
    price,
    description,
    images: JSON.stringify(images),
    creatorName: seller.name,
    creatorEmail: seller.email,
  });

  if (ok) {
    return NextResponse.json({
      data: { message: `${name} has been uploaded` },
    });
  } else {
    return NextResponse.json({
      error: "Something went wrong",
    });
  }
}
