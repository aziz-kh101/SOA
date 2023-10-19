const express = require("express");
const router = express.Router();
const queries = require("../db/queries");
const { userExist } = require("../helper/methods");

// router.get("/", async (req, res, next) => {
//   try {
//     const users = await queries.getAllUsers();
//     res.json(users);
//   } catch (err) {
//     res.sendStatus(500);
//     throw err;
//   }
// });

router.get("/teacher", async (req, res, next) => {
  try {
    const users = await queries.getAllTeachers();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post("/teacher", async (req, res, next) => {
  try {
    const { user } = req.body;
    if (userExist(user)) {
      user["type"] = 2;
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

router.put("/teacher/:email", async (req, res, next) => {
  try {
    const { user } = req.body;
    const { email } = req.params;
    if (userExist(user)) {
      user["type"] = 2;
      res.json(await queries.updateUser(email, user));
    } else {
      res.json({ error: "you need to specify user" });
    }
  } catch (err) {
    console.log(err);
    if (err.code == "ER_DUP_ENTRY") {
      return res.json({ error: "email alredy exist" });
    }
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/student", async (req, res, next) => {
  try {
    const users = await queries.getAllStudents();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post("/student", async (req, res, next) => {
  try {
    const { user } = req.body;
    if (userExist(user)) {
      user["type"] = 3;
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

router.put("/student/:email", async (req, res, next) => {
  try {
    const { user } = req.body;
    const { email } = req.params;
    if (userExist(user)) {
      user["type"] = 3;
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

router.get("/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await queries.getUser(email);
    if (!user) {
      res.json({ error: "not found" });
      return;
    }
    res.json(user);
  } catch (err) {
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
