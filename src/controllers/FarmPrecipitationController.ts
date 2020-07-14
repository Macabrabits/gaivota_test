import { Request, Response } from 'express';
import { FarmPrecipitationService } from '../services/FarmPrecipitationService';
import { controller } from './index';

const index = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmPrecipitationService.index);

const show = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmPrecipitationService.show);

const create = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmPrecipitationService.save);

const update = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmPrecipitationService.save);

const remove = async (req: Request, res: Response): Promise<Response> => controller(req, res, FarmPrecipitationService.remove);

const FarmPrecipitationController = {
  index,
  show,
  create,
  update,
  remove,
};

export { FarmPrecipitationController };
