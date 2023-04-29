require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3300;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to the Homepage</h1>");
});

app.post("/chat", (req, res) => {
  console.log("You have been Pinged!");
  console.log(req.body);

  if (req.body.userprompt) {
    res.status(200).send("received");
  } else {
    res.status(400).send("Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
