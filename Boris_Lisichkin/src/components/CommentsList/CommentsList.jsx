import React, { PureComponent } from 'react';
import './CommentsList.css';
import CommentsForm from 'components/CommentsForm';

export default class CommentsList extends PureComponent {
    render() {
        const { comments, loading, onLoadMore } = this.props;

        return (
           < div className = "CommentsList">
           <ul>
               {comments.map((comment, idx) => <li key={idx}>{comment.name}: {comment.body}</li>)}
           </ul>
           <button onClick={onLoadMore} disabled={loading}>LoadMore</button>
           </div>
        )
    }
}
