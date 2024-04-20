import express from 'express';
import usersController from './users.controller';

const router = express.Router();

router.route('/').get(usersController.findAll).post(usersController.create);

router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

export default router;
