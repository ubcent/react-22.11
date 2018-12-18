import React, { Component } from 'react';
import Container from 'reactstrap';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return(
            <footer className="footer__block footer-copyright text-center py-3">
                
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="https://www.Acloud.com"> Acloud.com </a>
                
            </footer>
        )
    }
}