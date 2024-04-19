import expres, { Request, Response } from 'express';
import { errorResponse, successResponse } from '../../../network/response';
import usersConstroller from './users.constroller';

const router = expres.Router();

router.get('/', (req: Request, res: Response) => {
  try {
    const users = usersConstroller.list();
    successResponse(res, req, 200, '', users);
  } catch (error: any) {
    errorResponse(res, req, 500, error.message);
  }
});

export default router;
