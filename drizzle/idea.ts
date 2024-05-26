import "@/drizzle/env.drizzle";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";
import { eq, ilike, or } from "drizzle-orm";

export const db = drizzle(sql, { schema });

export const deleteIdea = async ({ id }: { id: number }) => {
  try {
    await db.delete(schema.ideas).where(eq(schema.ideas.id, id));
    return { deleted: true };
  } catch (error) {
    console.log(error);
    return { deleted: false };
  }
};

export const getIdeas = async ({ query }: { query?: string | undefined }) => {
  if (query) {
    return db
      .select()
      .from(schema.ideas)
      .where(
        or(
          ilike(schema.ideas.title, `%${query}%`),
          ilike(schema.ideas.description, `%${query}%`),
        ),
      );
  }
  return await db.query.ideas.findMany();
};

export const getIdea = async (id: number) => {
  return await db.query.ideas.findFirst({
    where: (ideas, { eq }) => eq(ideas.id, id),
  });
};

export const getUserIdeas = async (email: string) => {
  return await db
    .select()
    .from(schema.ideas)
    .where(eq(schema.ideas.creatorEmail, email));
};

export const createIdea = async ({
  title,
  description,
  creatorName,
  creatorEmail,
}: schema.ideaType) => {
  try {
    await db.insert(schema.ideas).values({
      title,
      description,
      creatorName,
      creatorEmail,
    });
    return { ok: true };
  } catch (error) {
    return { ok: false };
  }
};
