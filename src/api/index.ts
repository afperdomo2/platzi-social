import express from 'express';
import morgan from 'morgan';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import config from '../config/config';
import { swaggerOptions } from '../config/swagger.options';
import routes from './routes';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(config.port, () => {
  console.info('🚀Server running at PORT: ', config.port);
});
