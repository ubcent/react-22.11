import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Layout from 'components/Layout';
import AboutPage from 'components/AboutPage';
import NewsPage from 'components/NewsPage';
import VideoPage from 'components/VideoPage';
import ContactsPage from 'components/ContactsPage';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

export default class App extends Component {
  render() {
   return (
     <div>
       <Switch>{/*не стал выносить это в отдельный файл, пока что мне так удобнее, как завершу сайт, перенесу*/}
         <Route exact path="/" component={Layout} />
         <Route exact path="/AboutPage" component={AboutPage} />
         <Route exact path="/NewsPage" component={NewsPage} />
         <Route exact path="/VideoPage" component={VideoPage} />
         <Route exact path="/ContactsPage" component={ContactsPage} />
       </Switch>
     </div>
   );
  };
};

ReactDom.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root'),
);