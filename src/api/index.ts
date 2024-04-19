import express from 'express';
import config from '../config/config';

import usersNetwork from './components/users/users.network';

const app = express();

// Router
app.use('/api/users', usersNetwork);

app.listen(config.port, () => {
  console.info('🚀Server running at PORT: ', config.port);
});
