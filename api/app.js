const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// When a get request is made to the root of the server, send back a json object
app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "AHUAHEUAHE",
    },
    {
      id: "2",
      title: "Game Review: Pokemon Brillian Diamond",
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland",
    },
  ]);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000.....");
});
