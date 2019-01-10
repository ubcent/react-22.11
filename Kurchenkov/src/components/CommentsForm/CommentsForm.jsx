import './CommentsForm.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class CommentsForm extends Component {
    constructor(props){
        super(props);
        // в состоянии должно храниться содержимое полей
        this.state = {
            author: '',
            message: '',
        };
    }

    handleFieldChange = (event) => {
        this.setState({
            // в названии свойства указывается переменная
            [event.target.name]: event.target.value,
        });
    }

    handleSend = () => {
        const { onComment } = this.props;
        // вызываем фукцию, которую передали из CommentList, и возвращаем в CommentList, положив внуть state
        onComment(this.state);
        // сделаем так, чтобы сообщение стиралось
        this.setState({'message':''});
    }

    render() {
        // достаем свойства из state и положим их в value
        const { author, message } = this.state;

        return (
            <div className = "CommentsForm">
            <input name="author" onChange={this.handleFieldChange} value={author} placeholder="Author" type="text" /> <br/>
            <textarea name="message" onChange={this.handleFieldChange} value={message} placeholder="Message" cols="100" rows="5"></textarea> <br/>
            <Button onClick={this.handleSend} color="primary">Send</Button>{' '}
            </div>            
        );
    };
};
