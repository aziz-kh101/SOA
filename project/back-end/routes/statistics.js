const express = require("express");
const router = express.Router();
const queries = require("../db/queries");

router.get("/presence", async (req, res, next) => {
  try {
    res.json(await queries.getPresenceStat());
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/success", async (req, res, next) => {
  try {
    res.json(await queries.getSuccessStat());
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
