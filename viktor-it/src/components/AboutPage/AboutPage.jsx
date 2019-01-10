import './AboutPage.css';
import React, {PureComponent} from 'react';
import Header from 'components/Header';
import Menu from 'components/Menu';

export default class AboutPage extends PureComponent {
  render(){
    return(
	  <div className="AboutPage">
	    <header>
          <Menu />
        </header>
        Наш блог создан с одной целью - мотивировать людей заниматься спортом и правильно питаться, а это залог красоты и здоровья на долгие годы вперед!
	  </div>
    );
  };
};