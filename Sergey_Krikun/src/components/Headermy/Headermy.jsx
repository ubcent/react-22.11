import './Headermy.css';

import React, { Component } from 'react';
import classNames from 'classNames'; //плагин помогает составлять имя класса
import { Button } from 'reactstrap';
import ModalForm from '../ModalForm';


import Menu from '../Menu';

const items = [
  { key: '1', title: 'Home', href: '/' },
  { key: '2', title: 'New blogs', href: '/new_blogs' },

]

export default class Headermy extends Component {
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
      <headermy className={headerClasses}>
        <div className="logo-wrapper">
          <div className="logo-sign">
            <a href="index.html" className="logo-sign__link">*</a>
          </div>
          <div className="logo-text">
            <a href="index.html" className="logo-text__link">Tricks</a>
          </div>
        </div>
        <div className="head-menu-wrapper">
          <Menu place="top" items={items} />
          <ModalForm />
        </div>
      </headermy>
    );
  }
}
