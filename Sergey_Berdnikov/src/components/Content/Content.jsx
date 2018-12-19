import './Content.css';

//React импортируем в каждом файле
import React, { Component } from 'react';
//подключаем reactstrap компоненты по частям, там меньше расходуется памяти
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardFooter, Button,
} from 'reactstrap';

const news = [
    'Page Heading',
    'Secondary Text',
    'Post Title',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    'Read More ->',
    'Posted on January 1, 2017',
    'Start Bootstrap',
];
//news.slice(0, 6).join(' ')

const CardNews = (
    <div>
        <Card>
            <CardImg top width="100%" src="http://placehold.it/750x300" alt="Card image cap"/>
            <CardBody>
                <CardTitle>{news.slice(2, 3).join(' ')}</CardTitle>
                <CardText>{news.slice(3, 4).join(' ')}</CardText>
                <Button color="primary">{news.slice(4, 5).join(' ')}</Button>
            </CardBody>
            <CardFooter>{news.slice(5, 7).join(' by ')}</CardFooter>
        </Card>
    </div>
);

export default class Content extends Component
{
    render() {
        return (
            <div className="Content">
                <h1>{news.slice(0, 1).join(' ')}</h1>
                <h2>{news.slice(1, 2).join(' ')}</h2>
                {CardNews}
                <br/>
                {CardNews}
                <br/>
                {CardNews}
            </div>
        );
    }
};