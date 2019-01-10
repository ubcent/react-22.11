import './NewsPage.css';
import React, {PureComponent} from 'react';
import Header from 'components/Header';
import Menu from 'components/Menu';

export default class NewsPage extends PureComponent {
  render(){
    return(
	  <div className="NewsPage">
	    <header>
          <Menu />
        </header>
        Здесь будет много новостей
	  </div>
    );
  };
};