const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./model/user');

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
});

const app = express();

app.use(bodyParser.json());

app.get('/comments', async (req, res) => {
    const comments = await Comment.find();

    res.json(comments);
});

app.get('/comments/:id', async (req, res) => {
    const comment = await Comment.findById(req.params.id);

    res.json(comment);
});

app.post('/comments', async (req, res) => {
    let comment = new Comment(req.body);
    comment = await comment.save();

    res.json(comment);
})

app.get('/users', async (req, res) => {
    const users = await User.find();

    res.json(users);
});

app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);

    res.json(user);
});

app.post('/users', async (req, res) => {
    let user = new User(req.body);
    user = await user.save();

    res.json(user);
})

app.listen(3000, () => {
    console.log('Server has been started');
});