const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://loaclhost/test');

const app = express();
app.use(bodyParser.json());

app.get('/animals', (req, res) => {
    res.json({
        name: 'Sergey',
        age: '29',
    });
});

app.get('/animals/:id', (req, res) => {
    res.send(`Requested id:${req.params.id}`)
});

app.post('/animals', (req, res) => {
    console.log(req.body);
    res.send('OK');
});

app.listen(3000, () => {
    console.log('Server has been started');
});