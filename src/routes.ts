import { FarmController } from './controllers/FarmController';
import { FarmNdviController } from './controllers/FarmNdviController';
import { FarmPrecipitationController } from './controllers/FarmPrecipitationController';
import { AuthController } from './controllers/AuthController';
import { AuthService } from './services/AuthService';

import { EncodeController } from './controllers/EncodeController';
const { authMiddleware } = AuthService;

const router = (app: any) => {
  app.post('/signin', AuthController.signin);
  app.post('/signup', AuthController.signup);
  
  app.get('/encode/:number', EncodeController.encode);
  app.get('/decode/:text', EncodeController.decode);

  app.use(authMiddleware());
  app.get('/farms', FarmController.index, );
  app.get('/farms/:id', FarmController.show);
  app.post('/farms', FarmController.create);
  app.put('/farms/:id', FarmController.update);
  app.delete('/farms/:id', FarmController.remove);

  app.get('/farmnvdis', FarmNdviController.index);
  app.get('/farmnvdis/:id', FarmNdviController.show);
  app.post('/farmnvdis', FarmNdviController.create);
  app.put('/farmnvdis/:id', FarmNdviController.update);
  app.delete('/farmnvdis/:id', FarmNdviController.remove);

  app.get('/farmsprecipitations', FarmPrecipitationController.index);
  app.get('/farmsprecipitations/:id', FarmPrecipitationController.show);
  app.post('/farmsprecipitations', FarmPrecipitationController.create);
  app.put('/farmsprecipitations/:id', FarmPrecipitationController.update);
  app.delete('/farmsprecipitations/:id', FarmPrecipitationController.remove);

  return app;
};

export { router };
