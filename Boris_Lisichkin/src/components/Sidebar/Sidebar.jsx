import React, { PureComponent } from 'react';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends PureComponent {
    showSettings (event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu>

                <NavLink exact={true} to="/home" activeClassName="activeClass" className="menu-item">Home</NavLink>
                <NavLink exact={true} to="/blog" activeClassName="activeClass" className="menu-item">News</NavLink>
                <NavLink exact={true} to="/comment" activeClassName="activeClass" className="menu-item">Blog</NavLink>
                <NavLink exact={true} to="/user" activeClassName="activeClass" className="menu-item">Contact</NavLink>
                <NavLink exact={true} to="/home" activeClassName="activeClass" className="menu-item">About</NavLink>
                <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}