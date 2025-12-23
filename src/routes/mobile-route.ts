import {
  handleAddMobile,
} from '@/controllers/mobile-controller';
import { createRouter } from '@/utils/create';
import { Router } from 'express';

export default createRouter((router: Router) => {
  router.post('/create', handleAddMobile);
});
