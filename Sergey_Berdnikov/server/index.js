//подключаем express
const express = require('express');
//для обработки пост запросов подключаем body-parser
const bodyParser = require('body-parser');
//для работы с mongoDB
const mongoose = require('mongoose');

//строка подключения mongoose к БД
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
//подключаем модель
const Animal = require('./model/animal');

//создаем приложение
const app = express();
//цепляем body-parser к нашему приложению
app.use(bodyParser.json());

//указываем чтобы обрабатывался get
app.get('/animals', async (req, res) => {
    console.log('start');
    const animals = await Animal.find();
    res.json(animals);
});
//шаблонизация роута, получаем параметр id
app.get('/animals/:id', async (req, res) => {
    const animal = await Animal.findById(req.params.id);
    res.json(animal);
});

//обработка запроса методом post
app.post('/animals', async (req, res) => {
    let animal = new Animal(req.body);
    animal = await animal.save();
    res.json(animal);
});

//Указываем какой порт слушать приложению
app.listen(3000, () => {
    console.log('Server has been started');
});
