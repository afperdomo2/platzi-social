import express, { Request, Response } from 'express';
import config from '../config/config';

import usersRoutes from './components/users/network';

const app = express();

// Router
app.use('/api/users', usersRoutes);

app.listen(config.port, () => {
  console.info('🚀Server running at PORT: ', config.port);
});
