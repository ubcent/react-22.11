const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://127.0.0.1:27017/fitDB', { useNewUrlParser: true });
mongoose.connection.on('open', () => {
  console.log('Приконектился к Mongo!');
});

const commentsDB = require('./model/comment');
const postsDB = require('./model/post');
const app = express();

app.use(express.static(path.join(__dirname, '../src')));

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname + '../src/index.html'));
});


app.get('/comments', async(req, res) => {
  const comments = await commentsDB.find();
  res.json(comments);
});

app.get('/comments/:id', async(req, res) => {
  const comment = await commentsDB.findById(req.params.id);
  res.json(comment);
});

app.post('/comments/new', async(req, res) => {
  let comment = new commentsDB(req.body);
  comment = await comment.save();
  res.json(comment);
});

app.get('/posts', async(req, res) => {
  const posts = await postsDB.find();
  res.json(posts);
});

app.get('/posts/:id', async(req, res) => {
  const post = await postsDB.findById(req.params.id);
  res.json(post);
});

app.post('/posts/new', async(req, res) => {
  let post = new postsDB(req.body);
  post = await post.save();
  res.json(post);
});

app.listen(3001, () => {
  console.log('server has been started!');
});