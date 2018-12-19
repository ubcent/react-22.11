import './CommentsList.css';

//React импортируем в каждом файле
import React, { Component } from 'react';
import CommentsForm from 'components/CommentsForm';


export default class CommentsList extends Component
{
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
    }

    handleComment = (comment) => {
        this.setState((prevState) => ({
            comments: prevState.comments.concat([comment]),
        }));
    };

    render() {
        const {comments} = this.state;
        return (
            <div className="CommentsList">
                <CommentsForm onComment={this.handleComment}/>
                <ul>
                    {comments.map((comment, idx)=> <li key={idx}>{comment.author}: {comment.message}</li>)}
                </ul>
            </div>
        );
    }
};
    
