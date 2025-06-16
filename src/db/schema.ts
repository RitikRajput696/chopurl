import { pgTable, serial, varchar, timestamp, text } from "drizzle-orm/pg-core";

export const urls = pgTable("urls", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 16 }).notNull().unique(),
  originalUrl: text("original_url").notNull(),
  createdAt: timestamp("createdAt", { withTimezone: true }).defaultNow(),
});
