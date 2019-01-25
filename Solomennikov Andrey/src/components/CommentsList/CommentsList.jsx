import './CommentsList.css';

import React, { PureComponent } from 'react';

export default class CommentsList extends PureComponent {
  render() {
    const { comments, loading, onLoadMore } = this.props;

    return (
      <div className="CommentsList">
        <ul>
          {comments.map((comment, idx) => <li key={idx}><strong>User: </strong>{comment.email} <strong>Message: </strong>{comment.body}</li>)}
        </ul>
        <button className ="opencomms" onClick={onLoadMore} disabled={loading}>Read More</button>
      </div>
    )
  }
}