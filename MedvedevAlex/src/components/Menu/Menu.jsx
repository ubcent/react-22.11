import './Menu.css';

import React, {PureComponent} from 'react';

export default function Menu(props) {
  const {items} = props;
  return (
    <div className="Menu">
      <ul className="menuHeader">
        {items.map((item, idx) => <li className="menuList" key={idx}><a className="menuLink" href={item.href}>
          {item.title}</a></li>)}
      </ul>
    </div>
  )
}