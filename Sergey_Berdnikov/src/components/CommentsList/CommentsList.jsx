
import './CommentsList.css';

//React импортируем в каждом файле
import React, { Component } from 'react';
import CommentsForm from 'components/CommentsForm';


export default class CommentsList extends Component
    {
        static defaultProps = {

        };

        constructor(props) {
            super(props);
            this.state = {
                comments: []
            };
        }

        handleComment = (comment) => {
            console.log('Comment', comment);
        };

        render() {
            return (
                <div className="CommentsList">
                    <CommentsForm onComment={this.handleComment()}/>
                </div>
            );
        }
    };
    
