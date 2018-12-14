import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Sidebar extends Component {
    render() {
        return(
            <ListGroup>
                <ListGroupItem>Введение в ReactJS: современный Javascript</ListGroupItem>
                <ListGroupItem>Настройка среды разработки</ListGroupItem>
                <ListGroupItem color="success">Первое приложение на ReactJS</ListGroupItem>
                <ListGroupItem>ReactJS под капотом</ListGroupItem>
                <ListGroupItem>Взаимодействие в ReactJS</ListGroupItem>
                <ListGroupItem>Роутинг в ReactJS приложении</ListGroupItem>
                <ListGroupItem>Концепция Flux на примере использования Redux</ListGroupItem>
                <ListGroupItem>Знакомство с NodeJS, EpxressJS и MongoDB</ListGroupItem>
            </ListGroup>
        )
    }
}