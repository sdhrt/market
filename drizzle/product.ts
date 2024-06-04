import "@/drizzle/env.drizzle";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";
import { eq, ilike, count } from "drizzle-orm";

export const db = drizzle(sql, { schema });

export async function getProducts({
  productName,
  offset = 0,
}: {
  productName?: string | undefined;
  offset?: number;
}) {
  if (productName) {
    return db
      .select()
      .from(schema.products)
      .limit(8)
      .where(ilike(schema.products.name, `%${productName}%`));
  }

  return await db.query.products.findMany({ limit: 8, offset: offset });
}

export const getProduct = async (id: number) => {
  return db.query.products.findFirst({
    where: (products, { eq }) => eq(products.id, id),
  });
};

export const getProductCount = async () => {
  return db.select({ value: count() }).from(schema.products);
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

export const getUserProducts = async ({ email }: { email: string }) => {
  return await db
    .select()
    .from(schema.products)
    .where(eq(schema.products.creatorEmail, email));
};

export const deleteProduct = async ({ name }: { name: string }) => {
  try {
    await db.delete(schema.products).where(eq(schema.products.name, name));
    return { deleted: true };
  } catch (error) {
    return { deleted: false };
  }
};
