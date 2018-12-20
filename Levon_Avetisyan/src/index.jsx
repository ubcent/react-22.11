import React, {Component} from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/Layout';

class App extends Component {
    render() {
        return (
            <Layout/>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('wrapper'),
);