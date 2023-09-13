const express = require('express');
const response = require('../../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const users = controller.list();
    response.success(req, res, users);
  } catch (error) {
    response.error(req, res);
  }
});

module.exports = router;
