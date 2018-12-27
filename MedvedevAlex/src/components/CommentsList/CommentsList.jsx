import './CommentsList.css';

import React, {PureComponent} from 'react';

export default function CommentsList(props) {
  const {comments, loading, onLoadMore} = props;
  return (
    <div className="CommentsList container">
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment, idx) => <li key={idx}><span className="commentName">{comment.name}:</span> {comment.body}</li>)}
      </ul>
      <button onClick={onLoadMore} disabled={loading}>LoadMore</button>
    </div>
  )
}