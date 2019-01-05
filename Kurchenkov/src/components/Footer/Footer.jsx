import './Footer.css';
import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <span className="copyright">Copyright &copy; Your Website 2018</span>
                </div>
            </div>
        );
    };
};