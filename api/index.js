// index.js
const express = require("express");
const app = express();

const urls = [
  "https://example.com/page1",
  "https://example.com/page2",
  "https://example.com/page3",
];

app.get("/", (req, res) => {
  const randomUrl = urls[Math.floor(Math.random() * urls.length)];
  res.redirect(randomUrl);
});

module.exports = app;
