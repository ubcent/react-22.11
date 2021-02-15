import 'bootstrap/dist/css/bootstrap.min.css';
import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import Layout from 'components/Layout';

class App extends PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Layout />
            </div>
        );
    };
};

ReactDom.render(
    <App />,
    document.getElementById('root'),
);
