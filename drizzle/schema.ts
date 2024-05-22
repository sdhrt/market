import { InferInsertModel } from "drizzle-orm";
import {
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    price: numeric("price").notNull(),
    creatorName: text("creatorName").notNull(),
    creatorEmail: text("creatorEmail").notNull(),
    images: text("image"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.id),
    };
  },
);
export type productType = InferInsertModel<typeof products>;

export const ideas = pgTable("ideas", {
  id: serial("id").primaryKey(),
  title: text("name").notNull(),
  description: text("description"),
  creatorName: text("creatorName").notNull(),
  creatorEmail: text("creatorEmail").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export type ideaType = InferInsertModel<typeof ideas>;
