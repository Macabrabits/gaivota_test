import { Request, Response } from 'express';
import { FarmService } from '../services/FarmService';
import { controller } from './index';

const index = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmService.index);

const show = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmService.show);

const create = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmService.save);

const update = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmService.save);

const remove = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmService.remove);

const FarmController = {
  index,
  show,
  create,
  update,
  remove,
};

export { FarmController };
