const express = require("express");
const router = express.Router();
const queries = require("../db/queries");
const { userExist } = require("../helper/methods");

router.get("/", async (req, res, next) => {
  try {
    const users = await queries.getAllAdmins();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { user } = req.body;
    if (userExist(user)) {
      user["type"] = 1;
      res.json(await queries.addUser(user));
    } else {
      res.json({ error: "you need to specify user" });
    }
  } catch (err) {
    if (err.code == "ER_DUP_ENTRY") {
      return res.json({ error: "email alredy exist" });
    }
    console.log(err);
    res.sendStatus(500);
  }
});

router.put("/:email", async (req, res, next) => {
  try {
    const { user } = req.body;
    const { email } = req.params;
    if (userExist(user)) {
      user["type"] = 1;
      res.json(await queries.updateUser(email, user));
    } else {
      res.json({ error: "you need to specify user" });
    }
  } catch (err) {
    if (err.code == "ER_DUP_ENTRY") {
      return res.json({ error: "email alredy exist" });
    }
    console.log(err);
    res.sendStatus(500);
  }
});

router.delete("/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    res.json(await queries.deleteUser(email));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
