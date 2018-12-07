//React импортируем в каждом файле
import React, { Component } from 'react';
//ReactDom только в точке входа
import ReactDom from 'react-dom';

import Header from './components/Header';

class App extends Component
{
    render() {
        return (
          <div >
              <Header size="big" color="red"/>
              <Header size="small" color="yellow"/>
              <Header size="standart" color="blue"/>
          </div>
        );
    }
}

ReactDom.render(
  <App/>,
  document.getElementById('root'),
);