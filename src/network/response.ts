import { Request, Response } from 'express';

const successResponse = (
  res: Response,
  req: Request,
  status: number = 200,
  message?: string,
  data?: any
) => {
  res.status(status).send({
    error: false,
    status,
    message: message || 'Success',
    data: data || null,
  });
};

const errorResponse = (
  res: Response,
  req: Request,
  status: number = 500,
  message?: string
) => {
  res.status(status).send({
    error: true,
    status,
    message: message || 'Internal server error',
    data: null,
  });
};

export { errorResponse, successResponse };
