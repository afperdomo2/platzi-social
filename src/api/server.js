const express = require('express');

const config = require('./config/config');
const user = require('./components/user/network');

const app = express();

// Router
app.use('/api/users', user);

app.listen(config.api.port, () => {
  console.info(`🚀Servidor iniciado en el puerto ${config.api.port}`);
});
