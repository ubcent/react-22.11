import './Content.css';

import React, {Component} from 'react';
import classNames from 'classnames';

import Button from '../Button';
import SideNav from '../sideNav'

export default class Content extends Component {


  render() {

    const content = classNames({
      content: true,
    });

    const loginBtn = classNames({
      loginBtn: true,
    });

    const items = [
      {title: 'Planet', href: '/planet'},
      {title: 'Animals', href: '/animals'},
      {title: 'Oceans', href: '/oceans'},
      {title: 'Rivers', href: '/rivers'},
      {title: 'Forests', href: '/forests'}
      ];
    const menuWrapper = classNames({
      sideNavWrapper:true,
    });
    const sidenav = classNames({
      sideNav: true,
    });


    return (
      <div className={content}>
        <Button loginBtn = {loginBtn} btnName= 'Login'  />
        <SideNav menuWrapper = {menuWrapper} sideNav={sidenav} items = {items}/>
      </div>
    )
  }
}