import expres from 'express';
import { successResponse, errorResponse } from '../../../network/response';

const router = expres.Router();

router.get('/', (req, res) => {
  successResponse(res, req, 200, 'Hello World 222');
});

export default router;
