import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Navs extends Component {
    render() {
        const {items} = this.props;

        return (
            <div>
                <Nav vertical pills>
                    {items.map((item) =>
                        <NavItem className="mt-2">
                            <NavLink href={item.href} active>{item.title}</NavLink>
                        </NavItem>
                    )}
                </Nav>
            </div>
        )
    }
}
