import './Footer.css'

import React, { Component } from 'react';
import Menu from '../Menu';



const items = [
  { key: '1', title: 'Home', href: '/' },
  { key: '2', title: 'New blogs', href: '/new_blogs' },

]

export default class Footer extends Component {


  render() {


    return (
      <footer className="main-footer">
        <Menu place="top" items={items} />
      </footer>
    )
  }



}

