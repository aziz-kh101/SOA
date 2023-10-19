const express = require("express");
const router = express.Router();
const queries = require("../db/queries");
const jwtHelper = require("../helper/jwt");
const authMiddleware = require("../middleware/auth_middleware");

router.post("/sign-in", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await queries.signIn(email, password);
    if (user) {
      if (user.type > 1)
        return res.json({ error: "this account not allowed here" });
      const token = jwtHelper.sign(user);
      res.json({
        token,
        user,
      });
    } else {
      res.json({ error: "email or password are incorrect" });
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/from-token", authMiddleware, async (req, res, next) => {
  try {
    res.json({ payload: req.payload });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
