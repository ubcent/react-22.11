import './PageComments.css';

import React from 'react';
import CommentsListContainer from 'containers/CommentsListContainer';

export default function PageComments() {
  return (
    <div className="CommentsPage">
      <CommentsListContainer/>
    </div>
  )
}