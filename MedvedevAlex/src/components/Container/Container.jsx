import './Container.css';

import React, {PureComponent} from 'react';

export default function Container(props) {
  const {children} = props;
  return (
    <div className="Container">
      {children}
    </div>
  )
}

