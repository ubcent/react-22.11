import './Header.css';

import React, { Component } from 'react';
import classNames from 'classNames'; //плагин помогает составлять имя класса
import { Button } from 'reactstrap';
import ModalForm from '../ModalForm';

import Menu from '../Menu';


const items = [
  { title: 'Home', href: '/' },
  { title: 'New blogs', href: '/new_blogs' },

]




export default class Header extends Component {
  /* static defaultProps = {
    size: 'big',
  } */ // используется для задания значения параметрам по умолчания
  render() {

    const { size, color } = this.props;
    // console.log(this.props); //параметры которые ме передаем все попадают сюда
    const headerClasses = classNames({
      header: true,
      'header-small': size === 'small', // условие при котором будет применяться класс header-small
      'header-big': size === 'big',
    })


    return (
      <header className={headerClasses}>
        <div className="logo-wrapper">
          <div className="logo-sign">
            <a href="index.html" className="logo-sign__link">*</a>
          </div>

          <div className="logo-text">
            <a href="index.html" class="logo-text__link">Tricks</a>
          </div>
        </div>

        <div className="head-menu-wrapper">
          <Menu place="top" items={items} />
          {/*  <Button color="primary" className="header-button">
            Log in
           </Button>{' '} */}
          <ModalForm />
        </div>
      </header>
    );
  }
}
