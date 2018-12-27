import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import './nav.css';

export default class Example extends Component {
    render() {
        return (
            <div>
                <div className="navBlock container">
                    <Nav>
                        <NavItem>
                            <NavLink href="#">Link</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Link</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Another Link</NavLink>
                        </NavItem>
                    </Nav>
                    <Button color="primary" className="loginBtn">Войти</Button>
                </div>
                <hr />
            </div>

        );
    }
}