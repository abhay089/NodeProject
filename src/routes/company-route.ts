import {
  handleAddCompany, handleDeleteCompany, handleEditCompany
} from '@/controllers/company-controller';
import { createRouter } from '@/utils/create';
import { Router } from 'express';

export default createRouter((router: Router) => {
  router.post('/create', handleAddCompany);
  router.post('/delete', handleDeleteCompany);
  router.post('/edit', handleEditCompany);

});