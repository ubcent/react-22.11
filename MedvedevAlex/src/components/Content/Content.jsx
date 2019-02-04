import './Content.css';

import React from 'react';

export default function Content(props) {
  const { children } = props;
  return (
    <div className="Content">
      {children}
    </div>
  )
}