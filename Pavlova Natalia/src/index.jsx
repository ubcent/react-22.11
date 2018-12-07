import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';





class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root'),
)