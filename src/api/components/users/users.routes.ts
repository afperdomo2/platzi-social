import express from 'express';
import usersController from './users.controller';

const router = express.Router();

/**
 * @swagger
 * /users:
 *  get:
 *   sumary: Retorna todos los usuarios
 *   responses:
 *    200:
 *     description: La lista de usuarios
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 */
router.get('/', usersController.findAll);

router.post('/', usersController.create);

router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

export default router;
