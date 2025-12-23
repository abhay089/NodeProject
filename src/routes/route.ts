import adminRoutes from '@/routes/admin-route';
import userRoutes from '@/routes/user-route';
import { createRouter } from '@/utils/create';
import { Router } from 'express';
import mobileRoutes from '@/routes/mobile-route';
import companyRoutes from '@/routes/company-route';

export default createRouter((router: Router) => {
  router.use('/admin', adminRoutes);
  router.use('/user', userRoutes);
  router.use('/mobile', mobileRoutes);
  router.use('/company', companyRoutes);
});
