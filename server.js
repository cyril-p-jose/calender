const express = require("express");
const app = express();
app.use(express.json());

let events = [];

app.get("/events", (req, res) => res.json(events));

app.post("/events", (req, res) => {
  const { date, title } = req.body;
  events.push({ date, title });
  res.status(201).json({ message: "Event added" });
});

app.listen(3001, () => console.log("Server running on port 3001"));
