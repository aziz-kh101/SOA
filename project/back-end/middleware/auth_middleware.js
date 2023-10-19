const jwtHelper = require("../helper/jwt");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwtHelper.verify(
    token,
    (err) => {
      console.log(err);
      res.sendStatus(403);
    },
    (payload) => {
      req.payload = payload;
      next();
    }
  );
};
