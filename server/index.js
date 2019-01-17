const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const Animal = require('./model/animal');

const app = express();
app.use(bodyParser.json());

app.get('/animals', async (req, res) => {
  const animals = await Animal.find();

  res.json(animals);
});

app.get('/animals/:id', async (req, res) => {
  const animal = await Animal.findById(req.params.id);

  res.json(animal);
});

app.post('/animals', async (req, res) => {
  let animal = new Animal(req.body);
  animal = await animal.save();

  res.json(animal);
});

app.listen(3000, () => {
  console.log('Server has been started');
});