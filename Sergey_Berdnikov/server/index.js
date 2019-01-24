//подключаем express
const express = require('express');
//для обработки пост запросов подключаем body-parser
const bodyParser = require('body-parser');
//для работы с mongoDB
const mongoose = require('mongoose');

//строка подключения mongoose к БД
// noinspection JSIgnoredPromiseFromCall
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
//подключаем модель
const User = require('./model/user');
const Post = require('./model/post');
const Comment = require('./model/comment');

//создаем приложение
const app = express();
//цепляем body-parser к нашему приложению
app.use(bodyParser.json());

//Обработка get запроса users
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

//Обработка get запроса по id
app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

//обработка запроса методом post
app.post('/users', async (req, res) => {
    let user = new User(req.body);
    user = await user.save();
    res.json(user);
});

//Обработка get запроса comments
app.get('/comments', async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
});

//Обработка get запроса по id
app.get('/comments/:id', async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
});

//обработка запроса методом post
app.post('/comments', async (req, res) => {
    let comment = new Comment(req.body);
    comment = await comment.save();
    res.json(comment);
});

//Обработка get запроса posts
app.get('/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

//Обработка get запроса по id
app.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
});

//обработка запроса методом post
app.post('/posts', async (req, res) => {
    let post = new Post(req.body);
    post = await post.save();
    res.json(post);
});

//Указываем какой порт слушать приложению
app.listen(3000, () => {
    console.log('Server has been started');
});
