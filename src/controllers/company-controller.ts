import { addCompany, deleteCompany, updateCompany} from '@/services/company-service';
import { newCompanySchema, deleteCompanySchema, editCompanySchema } from '@/schema/company';
import generateToken from '@/utils/jwt';
import argon2 from 'argon2';

import { asyncValidatorHandler } from '@qnx/response';

export const handleAddCompany = asyncValidatorHandler(async (req, _res) => {

  const data = newCompanySchema.parse(req);

  const { company: addedCompany } = await addCompany(data.body);

  return addedCompany;
});

export const handleDeleteCompany = asyncValidatorHandler(async (req, _res) => {
  const data = deleteCompanySchema.parse(req);

  const { id } = data.body;

  const result = await deleteCompany(id);

  return result;
});

export const handleEditCompany = asyncValidatorHandler(async (req, _res) => {
  console.log('hjkl');
  const data = editCompanySchema.parse(req);

  const { id, companyName, email, phone } = data.body;

  const result = await updateCompany(id, {
    companyName,
    email,
    phone,
  });

  return result;
});

      
