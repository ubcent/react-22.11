import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Menu extends Component {        
    render() {
        const { items } = this.props;
        return(
            <Nav className="mr-auto" navbar>
                {items.map((item) => <NavItem><NavLink href={item.href}>{item.title}</NavLink></NavItem>)}
            </Nav> 
        )
    }
}