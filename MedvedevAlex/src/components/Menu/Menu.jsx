import './Menu.css';

import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function Menu(props) {
  const {items, location} = props;
  return (
    <div className="Menu">
      <ul className="menuHeader">
        {items.map((item, idx) => <li className={"menuList" + `${location.pathname === item.href ? " active" : ""}`} key={idx}><Link to={item.href} className="menuLink">
          {item.title}</Link></li>)}
      </ul>
    </div>
  )
}

export default withRouter(Menu);