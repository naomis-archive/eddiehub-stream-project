const express = require("express");
const { createClient } = require("@astrajs/collections");

const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ name: "hello world" });
});

app.post("/events", async (req, res) => {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const eventsCollection = astraClient
    .namespace("angular")
    .collection("events");

  const event = await eventsCollection.create(req.body);

  res.send({ id: event.documentId, ...req.body });
});

app.get("/events", async (req, res) => {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const eventsCollection = astraClient
    .namespace("angular")
    .collection("events");

  const events = await eventsCollection.find({});

  const response = Object.keys(events).map((key) => ({
    id: key,
    ...events[key],
  }));

  console.log(response);
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
