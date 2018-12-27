import React, { PureComponent } from 'react';
import './Footer.css';

export default class Footer extends PureComponent {
    render() {
        return(
            <footer className="footer footer-copyright text-center py-3">
                
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <a href="https://www.mycloud.org"> mycloud.org </a>
                
            </footer>
        )
    }
}