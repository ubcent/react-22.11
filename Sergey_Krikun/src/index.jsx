import React, { Component } from 'react'; // импортируем в каждом файлк jsx
import ReactDOM from 'react-dom'; // нужно импортировать только в точке входа
import Header from './components/Header';
import MainArticle from 'components/MainArticle';
import Footer from 'components/Footer';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends Component {
  render() {
    const mainArticleItems = [
      {
        title: 'Man must explore, and this is exploration at its greatest',
        href: '#',
        content: 'Problems look mighty small from 150 miles up',
        author: 'Start Bootstrap',
        authorHref: '#',
        articleDate: 'September 24, 2018',
        key: 1,
      },
      {
        title: 'Science has not yet mastered prophecy',
        href: '#',
        content: 'We predict too much for the next year and yet far too little'
          + ' for the next ten.',
        author: 'Start Bootstrap',
        authorHref: '#',
        articleDate: 'August 24, 2018',
        key: 2,
      },
      {
        title: 'Failure is not an option',
        href: '#',
        content: 'Many say exploration is part of our destiny, but it’s'
          + ' ctually our duty to future generations.',
        author: 'Start Bootstrap',
        authorHref: '#',
        articleDate: 'July 8, 2018',
        key: 3,
      },
    ];

    return (
      <div className="layout_main_wrapper">
        <Header />
        <div className="MainContent">
          <MainArticle articleItems={mainArticleItems} />
          <hr />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById('root'));
