import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const newsTable = pgTable("news_table", {
    id: text("id").primaryKey().notNull(),
    slug: text("slug").unique().notNull(),
    header: text("heading").notNull(),
    content: text("content").notNull(),
    image: text("image")
});

export const insertNewsTable = createInsertSchema(newsTable);