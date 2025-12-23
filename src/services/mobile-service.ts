import { mobiles, type NewMobile, type Mobile } from '@/schema/mobile';
import { db } from '@/utils/db';
import { InvalidValueError } from '@qnx/errors';
import { eq } from 'drizzle-orm';

export const addMobile = async (mobile: NewMobile) => {

  const [newMobile] = await db
    .insert(mobiles)
    .values(mobile)
    .$returningId();

  if (!newMobile) {
    throw new InvalidValueError('Failed to add user', { key: 'INTERNAL_ERROR' });
  }

  return { mobile: newMobile };
};
