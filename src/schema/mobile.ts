import type { InferSelectModel } from 'drizzle-orm';
import { mysqlTable ,boolean, text, timestamp, int, varchar } from "drizzle-orm/mysql-core"
import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod/v4';

export const mobiles = mysqlTable('mobiles', {
  id: int('id').notNull().primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  brand: varchar('brand',{ length: 255 }).notNull(),
  condition: text('condition'),
  code: text('code').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const selectMobileSchema = createSelectSchema(mobiles);

export const newMobileSchema = z.object({
  body: selectMobileSchema.pick({
    name: true,
    brand: true,
    code: true,
    condition: true,
  }),
});

export type Mobile = InferSelectModel<typeof mobiles>;
export type NewMobile = z.infer<typeof newMobileSchema>['body'];
