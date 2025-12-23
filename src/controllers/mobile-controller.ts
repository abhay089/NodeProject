import {
  addMobile,
} from '@/services/mobile-service';
import {
  newMobileSchema
} from '@/schema/mobile';
import generateToken from '@/utils/jwt';
import argon2 from 'argon2';

import { asyncValidatorHandler } from '@qnx/response';

export const handleAddMobile = asyncValidatorHandler(async (req, _res) => {

  const data = newMobileSchema.parse(req);

  const { mobile: addedMobile } = await addMobile(data.body);

  return addedMobile;
});
      
