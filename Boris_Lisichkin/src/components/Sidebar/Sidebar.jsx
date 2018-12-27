import React, { PureComponent } from 'react';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from "react-router-dom";


export default class Sidebar extends PureComponent {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu>
                <NavLink to="/" className="menu-item">Home</NavLink>
                <NavLink to="/blog" className="menu-item">Blog</NavLink>
                <NavLink to="/comment" className="menu-item">Comments</NavLink>
                <NavLink to="/user" className="menu-item">Users</NavLink>
            </Menu>
        );
    }
}