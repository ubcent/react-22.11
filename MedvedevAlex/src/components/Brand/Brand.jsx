import './Brand.css';

import React, {PureComponent} from 'react';

export default function Brand(props) {
  return (
    <div className="Brand">
      <div><a href="index.html"><img className="brandImage" src={require('./cheatCat.png')} alt="cheatCat"/>
      </a></div>
      <div><a className="brandName" href="index.html">CheatCat</a></div>
    </div>
  )
}