const express = require('express');
const response = require('../../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    response.success(req, res, 'Todo correcto');
  } catch (error) {
    response.error(req, res, 'Se presentó un problema');
  }
});

module.exports = router;
