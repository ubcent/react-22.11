import React, { Component } from 'react'; // импортируем в каждом файлк jsx
import ReactDOM from 'react-dom'; //нужно импортировать только в точке входа
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faHome, faVideo } from '@fortawesome/free-solid-svg-icons';
import Headermy from './components/Headermy';
import ArticleCard from './components/Articlecard';
import Menu from './components/Menu';
import Footer from './components/Footer';
import classNames from 'classNames';



import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';




const items = [
  { key: '1', title: <FontAwesomeIcon className="icon-font__link" icon={faHome} />, href: '/' },
  { key: '2', title: <FontAwesomeIcon className="icon-font__link" icon={faVideo} />, href: '/video' },
  { key: '3', title: <FontAwesomeIcon className="icon-font__link" icon={faImages} />, href: '/gallery' }

]
class Layout extends Component {

  render() {

    return (
      <div className="layout_main_wrapper">
        <Headermy />
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
        <Footer />

      </div>
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById("root"));
