import './Comment.css';

import React from 'react';


export default function Comment (props) {
  const {name, body} = props;
  return (
    <div className="Comment">
      <div>
        <h2>{name}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}