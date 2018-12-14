import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Layout from './components/Layout';
import MainPage from './components/MainPage';

class App extends Component {
    render() {
        return (
            <Layout> <MainPage/> </Layout>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('body')
);
