import './CommentsList.css';

import React from 'react';
import {Link} from 'react-router-dom';

export default function CommentsList(props) {
  const {comments, loading, onLoadMore} = props;
  return (
    <div className="CommentsList container">
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment, idx) => <li key={idx}><span className="commentName">
          <Link to={`comments/${comment.id}`}>{comment.name}</Link>:</span> {comment.body}</li>)}
      </ul>
      <button onClick={onLoadMore} disabled={loading}>LoadMore</button>
    </div>
  )
}