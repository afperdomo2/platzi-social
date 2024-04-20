import express from 'express';
import usersRoutes from './components/users/users.routes';

const router = express.Router();

router.use('/users', usersRoutes);

export default router;
