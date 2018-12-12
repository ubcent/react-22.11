import React, { Component } from 'react'; // импортируем в каждом файлк jsx
import ReactDom from 'react-dom'; //нужно импортировать только в точке входа

import Layout from './components/Layout';

class App extends Component {
  render() {

    return ( // можно вернуть только один эл. с вложенниями
      <div>
        <Layout />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
