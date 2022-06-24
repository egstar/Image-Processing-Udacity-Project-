import { Router, Request, Response } from 'express';
import path from 'path';

const aboutRoute = Router();
// set Manual route
aboutRoute.get('/resize', (_req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, '../../../assets/htm/resize.htm'));
});

export default aboutRoute;
