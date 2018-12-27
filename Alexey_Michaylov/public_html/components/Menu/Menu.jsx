import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function Menu(props) {        
    return(
        <Nav className="mr-auto" navbar>
            {props.items.map((item, idx) => <NavItem key={idx}><NavLink href={item.href} onClick={props.toggle}>{item.title}</NavLink></NavItem>)}
        </Nav> 
    )
}
