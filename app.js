require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3300;

//Middleware
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to the Homepage</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
