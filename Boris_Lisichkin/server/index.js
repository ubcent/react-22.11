const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./model/user');

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
});

const app = express();

app.use(bodyParser.json());

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