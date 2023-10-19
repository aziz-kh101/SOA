const jwt = require("jsonwebtoken");

module.exports = {
  verify(token, errCallback, callback) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, signedToken) => {
      if (err) {
        errCallback(err);
      } else {
        callback(signedToken.payload);
      }

      if (err) return res.sendStatus(403);
    });
  },

  sign(payload) {
    return jwt.sign({ payload }, process.env.TOKEN_SECRET);
  },
};
