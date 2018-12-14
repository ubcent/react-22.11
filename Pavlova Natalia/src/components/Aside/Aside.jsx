import './Aside.css';

import React, { Component } from 'react';

import ModalExample from '../ModalExample';

export default class Aside extends Component {
    render() {
        return(
            <aside>
                <div className="sidebar">
                    <h2>Search</h2>
                </div>
                <div className="sidebar">
                    <h2>categories</h2>
                    <nav>
                        <ul className="categor">
                            <li><a href="#">Weekend</a></li>
                            <li><a href="#">Nature</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Holiday</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="sidebar">
                    <h2>Stay Tuned.</h2>
                    <div className="subscribe"></div>
                </div>
                <div className="modal">
                    <ModalExample /> 
                </div>
            </aside>
        );
    }
}