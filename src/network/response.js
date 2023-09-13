exports.success = (req, res, message = '', status = 200) => {
  res.status(status).send({
    status,
    body: message,
    error: false,
  });
};

exports.error = (req, res, message, status = 500) => {
  res.status(status).send({
    status,
    body: message || 'Internal server Error',
    error: true,
  });
};
