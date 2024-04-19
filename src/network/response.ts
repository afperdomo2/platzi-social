import { Request, Response } from 'express';

const successResponse = (
  res: Response,
  req: Request,
  status: number = 200,
  message: string = 'Success'
) => {
  res.status(status).send({
    error: false,
    status,
    message,
  });
};

const errorResponse = (
  res: Response,
  req: Request,
  status: number = 500,
  message: string = 'Internal Server Error'
) => {
  res.status(status).send({
    error: true,
    status,
    message,
  });
};

export { errorResponse, successResponse };
