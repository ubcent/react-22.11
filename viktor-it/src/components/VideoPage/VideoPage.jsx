import './VideoPage.css';
import React, {PureComponent} from 'react';
import Header from 'components/Header';
import Menu from 'components/Menu';

export default class VideoPage extends PureComponent {
  render(){
    return(
	  <div className="VideoPage">
	    <header>
          <Menu />
        </header>
        Здесь будет много видео обзоров
	  </div>
    );
  };
};