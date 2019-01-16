import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';

import Layout from 'components/Layout';
import AboutPage from 'components/AboutPage';
import NewsPage from 'components/NewsPage';
import VideoPage from 'components/VideoPage';
import ContactsPage from 'components/ContactsPage';

import routes from './routes';
import store from './store';

export default class App extends Component {
  render() {
   return (
     <div>
       <Switch>
         {routes.map((route, idx) => <Route key={idx} {...route} />)};
       </Switch>
     </div>
   );
  };
};

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
