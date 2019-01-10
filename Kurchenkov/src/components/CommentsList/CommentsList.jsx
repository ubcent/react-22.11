import './CommentsList.css';
import React, { Component } from 'react';
import CommentsForm from 'components/CommentsForm';

export default class CommentsList extends Component {
    // создаем конструктор, в котором инициализируем state
    constructor(props) {
        super(props);

        this.state = {
            // по умолчанию - пустой массив для комментариев
            comments: [],
        }
    }
    // сюда передается управление, когда пользователь нажимает кнопку Send  
    handleComment = (comment) => {
        this.setState((prevState) => ({
            comments: prevState.comments.concat([comment]),
        }));
    }

    render() {
        // выведем комметрарии
        const { comments } = this.state;
        return (
            <div className="CommentsList">
                <h4>Leave a Comment:</h4>
                <CommentsForm onComment={this.handleComment} />
                <ul>
                    {comments.map((comment, idx) => <li key={idx}>{comment.author}: {comment.message}</li>)}
                </ul>
            </div>
        );
    };
};
