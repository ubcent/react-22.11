import './Layout.css';

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faHome, faVideo } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header';
import ArticleCard from '../ArticleCard/ArticleCard.jsx';
import classNames from 'classNames';

import Menu from '../Menu';


const items = [
  { title: <FontAwesomeIcon className="icon-font__link" icon={faHome} />, href: '/' },
  { title: <FontAwesomeIcon className="icon-font__link" icon={faVideo} />, href: '/video' },
  { title: <FontAwesomeIcon className="icon-font__link" icon={faImages} />, href: '/gallery' }

]
export default class Layout extends Component {

  render() {

    return (
      <div className="layout_main_wrapper">
        <Header />
        <div className="content-wrapper">
          <nav className="left-menu">
            <Menu place="left" type="icon" items={items} />
          </nav>
          <div className="main-content">
            <ArticleCard />
          </div>

        </div>

      </div>
    );
  }
}
