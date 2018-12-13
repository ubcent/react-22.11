import React, { Component } from 'react'; // импортируем в каждом файлк jsx
import ReactDom from 'react-dom'; //нужно импортировать только в точке входа
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faHome, faVideo } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import ArticleCard from './components/ArticleCard';
import Menu from './components/Menu';
import Footer from './components/Footer'; 
import classNames from 'classNames';



import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';




const items = [
  { key: '1', title: <FontAwesomeIcon className="icon-font__link" icon={faHome} />, href: '/' },
  {  key: '2', title: <FontAwesomeIcon className="icon-font__link" icon={faVideo} />, href: '/video' },
  {  key: '3', title: <FontAwesomeIcon className="icon-font__link" icon={faImages} />, href: '/gallery' }

]
class Layout extends Component {

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
            <ArticleCard />
            <ArticleCard />
          </div>

        </div>
        <Footer  />

      </div>
    );
  }
}

ReactDom.render(<Layout />, document.getElementById("root"));
