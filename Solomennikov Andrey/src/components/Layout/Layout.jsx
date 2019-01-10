import './Layout.css';
import React, {Component} from 'react';
import Content from '../Content';
import Nav from '../Nav';
import Formlogin from '../Formlogin';
import Header from '../Header';

export default class Layout extends Component {

    changeNewsHandler() {
        console.log('Clicked');
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="left">
                        <Content/>
                    </div>
                    <div className="right">
                        <Nav/>
                        <Formlogin/>
                    </div>
                </div>
                <div className="footer">
                    All rights reserved
                </div>
            </div>

        )
    }
}