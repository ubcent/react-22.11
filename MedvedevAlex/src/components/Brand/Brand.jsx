import './Brand.css';

import React from 'react';
import { Link } from 'react-router-dom';

export default function Brand(props) {
  return (
    <div className="Brand">
      <div><Link to="/"><img className="brandImage" src={require('./cheatCat.png')} alt="cheatCat"/>
      </Link></div>
      <div><Link to="/" className="brandName">CheatCat</Link></div>
    </div>
  )
}