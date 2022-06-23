import { Router, Request, Response } from 'express';
import path from 'path';
import imgsRoute from './api/imgs';
import aboutRoute from './user/about';
import filter from '../utils/imgspath';

const routes = Router();

// set the Api Route
routes.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../assets/htm/index.htm'));
});
routes.get('/resize', aboutRoute);
routes.get('/Api/img', imgsRoute);
// set list route
routes.get('/Api/imgs', (_req: Request, res: Response) => {
  res.send(filter);
});
routes.get('/list', (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../assets/htm/imglist.htm'));
});

export default routes;
