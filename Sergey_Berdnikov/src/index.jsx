//React импортируем в каждом файле
import React, { Component } from 'react';
//ReactDom только в точке входа
import ReactDom from 'react-dom';

class App extends Component
{
    render() {
        return (
          <div className="box">
              Hello world
          </div>
        );
    }
}

ReactDom.render(
  <App/>,
  document.getElementById('root'),
);