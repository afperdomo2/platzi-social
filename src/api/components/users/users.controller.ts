import { Request, Response } from 'express';
import { errorResponse, successResponse } from '../../../network/response';
import usersService from './users.service';

function create(req: Request, res: Response) {
  try {
    const userCreated = usersService.create(req.body);
    successResponse(res, req, 201, '', userCreated);
  } catch (error: any) {
    errorResponse(res, req, 500, error.message);
  }
}

function update(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const userUpdated = usersService.update(parseInt(id), req.body);
    successResponse(res, req, 200, '', userUpdated);
  } catch (error: any) {
    errorResponse(res, req, 500, error.message);
  }
}

function findAll(req: Request, res: Response) {
  try {
    const users = usersService.findAll();
    successResponse(res, req, 200, '', users);
  } catch (error: any) {
    errorResponse(res, req, 500, error.message);
  }
}

function findById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = usersService.findById(parseInt(id));
    successResponse(res, req, 200, '', user);
  } catch (error: any) {
    errorResponse(res, req, 500, error.message);
  }
}

function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = usersService.remove(parseInt(id));
    successResponse(res, req, 200, '', user);
  } catch (error: any) {
    errorResponse(res, req, 500, error.message);
  }
}

export default {
  findAll,
  findById,
  create,
  update,
  remove,
};
