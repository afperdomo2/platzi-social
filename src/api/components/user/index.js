const store = require('../../../store/dummy');
const controller = require('./controller');

// Inyecta el store al controlador
module.exports = controller(store);
