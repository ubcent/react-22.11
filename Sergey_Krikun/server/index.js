const express = require('express');
const cors = require('cors');
/* var request = require('request'); */
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const hostname = 'http://localhost';

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const Post = require('./model/post');
const User = require('./model/user');
const Comment = require('./model/comment');





/*request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  newObj = body; // Print the HTML for the Google homepage.
}); * /

/* node server/ - запустить сервер*/

const app = express();
app.use(cors());
app.use(bodyParser.json());


/* app.get('/posts', (req, res) => {





});  */// req - запрос, res - ответ

/* app.get('/animals/:id', (req, res) => {
  res.send(`Requested id:${req.params.id}`);
}) */



/* app.post('/posts', (req, res) => {
  newObj = req.body;
  res.send('Posts OK');
  return req.body;
}) */

/* app.post('/users', (req, res) => {
  res.send('Users OK');
  return req.body;
}) */


app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  console.log('Get post info');

  res.json(posts);

});

app.post('/posts', async (req, res) => {
  let post = new Post(req.body);
  post = await post.save();
  console.log('Saved post info');

  res.json(post);

});

app.get('/users', async (req, res) => {
  const user = await User.find();
  console.log('Get user info');

  res.json(user);

});

app.post('/users', async (req, res) => {
  let user = new User(req.body);
  user = await user.save();
  console.log('Saved user info');

  res.json(user);

});

app.get('/comments', async (req, res) => {
  const comment = await Comment.find();
  console.log('Get comment info');

  res.json(comment);

});

app.post('/comments', async (req, res) => {
  let comment = new Comment(req.body);
  comment = await comment.save();
  console.log('Saved comment info');

  res.json(comment);

});

app.get('/', (req, res) => res.send('Hello World'));




app.listen(3000, () => {
  console.log('Server has been started');
});
