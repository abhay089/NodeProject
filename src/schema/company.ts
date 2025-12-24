import type { InferSelectModel } from 'drizzle-orm';
import { mysqlTable ,boolean, text, timestamp, int, varchar } from "drizzle-orm/mysql-core"
import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod/v4';
import { users } from './user'; // 👈 import users table

export const companies = mysqlTable('companies', {
  id: int('id').notNull().primaryKey().autoincrement(),
  userId: int('user_id').notNull().references(() => users.id, { onDelete: 'cascade', onUpdate: 'cascade'}),
  companyName: varchar('company_name', { length: 255 }).notNull(),
  companyAddress: varchar('company_address',{ length: 255 }).notNull(),
  AdminName: text('admin'),
  phone: text('phone').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}); 

export const selectCompanySchema = createSelectSchema(companies);

export const newCompanySchema = z.object({
  body: selectCompanySchema.pick({
    userId: true,
    companyName: true,
    companyAddress: true,
    AdminName: true,
    phone: true,
  }),
});

export const deleteCompanySchema = z.object({
  body: z.object({
    id: z.number().int().positive(),
  }),
})

export const editCompanySchema = z.object({
  body: z.object({
    id: z.coerce.number(),
    companyName: z.string().min(1),
    email: z.string().email(),
    // phone: z.string().min(10),
    phone: z.coerce.string().min(8),
  })
});

export type Company = InferSelectModel<typeof companies>;
export type NewCompany = z.infer<typeof newCompanySchema>['body'];