import express from 'express';

import config from '../config/config';
import routes from './routes';

const app = express();

// Router
app.use('/api', routes);

app.listen(config.port, () => {
  console.info('🚀Server running at PORT: ', config.port);
});
