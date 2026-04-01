const express = require("express");
const router = express.Router();

let events = [];

router.get("/", (req, res) => res.json(events));

router.post("/", (req, res) => {
  const { date, title } = req.body;
  events.push({ date, title });
  res.status(201).json({ message: "Event added" });
});

module.exports = router;
