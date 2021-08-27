const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ name: "hello world" });
});

app.post("/events", async (req, res) => {
  console.log(req.body);
  res.send({ id: "123" });
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
    {
      name: "Person 2",
      eventName: "Event Name 3",
      eventDescription: "Event Description 2",
      eventDate: "Event Date 2",
      eventUrl: "Event Url 2",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
