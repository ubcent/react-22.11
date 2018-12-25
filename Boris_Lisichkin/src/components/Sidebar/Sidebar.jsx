import React, { PureComponent } from 'react';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';

export default class Sidebar extends PureComponent {
    showSettings (event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/news">News</a>
                <a id="contact" className="menu-item" href="/blog">Blog</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a id="contact" className="menu-item" href="/about">About</a>
                <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}