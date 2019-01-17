import React, { PureComponent, Component } from 'react'; // импортируем в каждом файлк jsx
import ReactDOM from 'react-dom'; // нужно импортировать только в точке входа
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// импортировали для роутинга
import { Provider } from 'react-redux'; // подключаем копонент - обертка для redux
import routes from './routes';
import store from './store'; // импортируемstore redux

import { Button } from 'reactstrap';
import Header from './components/Header';
import Footer from 'components/Footer';
import ModalWindow from 'components/ModalWindow';
import FetchingSelectedData from 'containers/FetchingSelectedData';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Aticles_list',
    };
  }

  checkContent(page) {
    this.setState((prevState) => ({
      ...prevState,
      content: page,
    }));
  }

  render() {
    const numberOfPost = 3;
    const userId = 1;
    const limitOfComments = 3;
    const { content } = this.state;

    return (
      <div className="layout_main_wrapper">
        <Header />
        <div className="main-content">

          <Link to="/">Home</Link>
          <Link to="/pageOfArticle/1/2/1">Single Page</Link>
          <div>
            <Switch>
              {routes.map((route, idx) => {
                return <Route key={idx} {...route} />;
              })}
            </Switch>
          </div>


          <hr />
        </div>
        <Footer className="footer" />

      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}> {/* для redux */}
    <BrowserRouter forceRefresh={false}>
      <Layout />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
