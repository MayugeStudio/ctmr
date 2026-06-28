import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from 'drizzle-orm';

export const tasks = sqliteTable("tasks", {
  id: int('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(),
  description: text('description').notNull(),
  created_at: int('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`).notNull(),
});
