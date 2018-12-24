import './CommentsList.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';


export default class CommentsList extends PureComponent
{
    render() {
        const { comments, loading, onLoadMore } = this.props;
        return (
            <div className="CommentsList">
                <ul>
                    {comments.map((comment, idx) => <li key={idx}><strong>{comment.name}</strong>: {comment.body}</li>)}
                </ul>
                <button onClick={onLoadMore} disabled={loading}>Load more</button>
            </div>
        );
    }
};
    
