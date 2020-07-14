import { Request, Response } from 'express';
import { EncodeService } from '../services/EncodeService';
import { controller } from './index';

const encode = async (req: Request, res: Response): Promise<Response> => controller(req, res, EncodeService.encode);

const decode = async (req: Request, res: Response): Promise<Response> => controller(req, res, EncodeService.decode);

const EncodeController = {
  encode,
  decode  
};

export { EncodeController };
