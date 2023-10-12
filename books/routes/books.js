var express = require("express");
var router = express.Router();

const books = [
  {
    id: 1,
    name: "book 1",
  },
  {
    id: 2,
    name: "book 1",
  },
  {
    id: 3,
    name: "book 1",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(books);
});

router.get("/:id", function (req, res, next) {
  res.json(books.find((item) => item.id == req.params.id));
});

router.post("/", function (req, res, next) {
  books.push(req.body.book);
  res.json({ msg: "added" });
});

router.put("/:id", function (req, res, next) {
  console.log(req.params);
  const index = books.findIndex((item) => item.id == req.params.id);
  if (index != -1) {
    books[index] = req.body.book;
    res.json({ msg: "updated" });
  } else res.status(404).json({ error: "id not exist" });
});

router.delete("/:id", function (req, res, next) {
  const index = books.findIndex((item) => item.id == req.params.id);
  if (index != -1) {
    books.splice(index, 1);
    res.json({ msg: "deleted" });
  } else res.status(404).json({ error: "id not exist" });
});

module.exports = router;
