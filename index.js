const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const data = require("./data/data.json");
const news = require("./data/data.json");
const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("News API Running");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.get("/courses", (req, res) => {
  res.send(news);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((course) => course.id.toString() === id);
  console.log(id, selectedNews);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log("Web Technology Server running on port", port);
});
