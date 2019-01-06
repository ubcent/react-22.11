import './Header.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';
//Подключаем reactstrap по частям, там меньше расходуется памяти

import Collapse from 'reactstrap/lib/Collapse';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import Container from 'reactstrap/lib/Container';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';

const navMenu = [
    { title: 'Home', href: '/', active: true },
    { title: 'Posts', href: '/posts', active: false },
    { title: 'Comments', href: '/comments', active: false },
    { title: 'Users', href: '/users', active: false },

];

class Header extends PureComponent {
    render() {
        console.log(this.props);

        return (
            <div className="Header">
                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">Start Bootstrap</NavbarBrand>
                        <NavbarToggler/>
                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                                {navMenu.map((value, idx) => {
                                    return <NavItem><NavLink key={idx}
                                                             active={value.active}
                                                             tag={RRNavLink}
                                                             to={value.href}>{value.title}</NavLink>
                                    </NavItem>
                                })}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
};

export default withRouter(Header);