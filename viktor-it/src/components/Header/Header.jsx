import './Header.css';
import React, {Component} from 'react';
import Menu from 'components/Menu';

export default class Header extends Component {
  render(){
    return(
      <header>
      <Menu />
      </header>
    );
  };
};