const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-HeaderS", "Origin, X-Request-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const posts = req.body;
  console.log();
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get('/api/posts',(req, res, next) => {
  const posts = [
    { id: 'paok1926', title: 'First server-side post', content: 'This is coming from the server'},
    { id: '78utgbwf8', title: 'Second server-side post', content: 'This is coming from the server'}
  ];
  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  })
});

module.exports = app;
