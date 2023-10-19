module.exports = (req, res, next) => {
  const { payload } = req;

  if (payload && payload.type == 0) {
    next();
    return;
  }

  res.sendStatus(403);
};
