const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({ name: "hello world" });
});

app.get("/events", (req, res) => {
  res.send([
    {
      name: "Person 1",
      eventName: "Event Name 1",
      eventDescription: "Event Description 1",
      eventDate: "Event Date 1",
      eventUrl: "Event Url 1",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
