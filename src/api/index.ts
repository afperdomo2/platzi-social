import express, { Request, Response } from 'express';
import config from '../config/config';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World');
});

app.listen(config.port, () => {
  console.info('🚀Server running at PORT: ', config.port);
});
