import { companies, type NewCompany, type Company } from '@/schema/company';
import { db } from '@/utils/db';
import { InvalidValueError } from '@qnx/errors';
import { eq } from 'drizzle-orm';

export const addCompany = async (company: NewCompany) => {

  const [newCompany] = await db
    .insert(companies)
    .values(Company)
    .$returningId();

  if (!newCompany) {
    throw new InvalidValueError('Failed to add user', { key: 'INTERNAL_ERROR' });
  }

  return { company: newCompany };
};

export const deleteCompany = async (id: number) => {
  const result = await db
    .delete(companies)
    .where(eq(companies.id, id));

  if (result.rowsAffected === 0) {
    throw new InvalidValueError('Company not found', {
      key: 'NOT_FOUND',
    });
  }

  return { success: true };
};

