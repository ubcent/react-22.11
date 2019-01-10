import './CommentsList.css';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import CommentsForm from 'components/CommentsForm';

export default class CommentsList extends PureComponent {
  render() {
    const { comments, loading, onLoadMore } = this.props;

    return (
      <div className="CommentsList">
        <ul>
          {comments.map((comment) => <li key={comment.id}><Link to={`/comments/${comment.id}`}>{comment.name}</Link>: {comment.body}</li>)}
        </ul>
        <button onClick={onLoadMore} disabled={loading}>LoadMore</button>
      </div>
    )
  }
}
