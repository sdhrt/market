import "@/drizzle/env.drizzle";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

export const db = drizzle(sql, { schema });

export const getProducts = async () => {
  return db.query.products.findMany();
};

export const getProduct = async (id: number) => {
  return db.query.products.findFirst({
    where: (products, { eq }) => eq(products.id, id),
  });
};

export const createProduct = async ({
  name,
  price,
  description,
  images,
  creatorName,
  creatorEmail,
}: schema.productType) => {
  try {
    await db.insert(schema.products).values({
      name,
      price,
      description,
      images,
      creatorName,
      creatorEmail,
    });
    return { ok: true };
  } catch (error) {
    return { ok: false };
  }
};
