require("dotenv").config();
const aiCall = require("./openai");

const express = require("express");
const app = express();
const port = process.env.PORT || 3300;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to the Homepage</h1>");
});

app.post("/chat", async (req, res) => {
  console.log(req.body);
  const userPrompt = req.body.userprompt;
  const aiResponse = await aiCall(userPrompt);

  if (req.body.userprompt) {
    res.status(200).send(aiResponse);
  } else {
    res.status(400).send("Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
