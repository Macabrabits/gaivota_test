import { Request, Response } from 'express';
import { FarmNvdiService } from '../services/FarmNdviService';
import { controller } from './index';

const index = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmNvdiService.index);

const show = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmNvdiService.show);

const create = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmNvdiService.save);

const update = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmNvdiService.save);

const remove = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmNvdiService.remove);

const FarmNdviController = {
  index,
  show,
  create,
  update,
  remove,
};

export { FarmNdviController };
