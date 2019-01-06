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
    { title: 'Home', href: '/' },
    { title: 'Posts', href: '/posts' },
    { title: 'Comments', href: '/comments' },
    { title: 'Users', href: '/users' },

];



class Header extends PureComponent {
    getActive = (href) => {
        const { location } = this.props;

        const substr = location.pathname.substr(0, href.length());
        if (href.length === 1 && location.pathname.length !== 1) {
            return '';
        }

        return substr === href;
    };

    render() {
        return (
            <div className="Header">
                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand tag={RRNavLink} to="/">Start Bootstrap</NavbarBrand>
                        <NavbarToggler/>
                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                                {navMenu.map((value, idx) => {
                                    return <NavItem><NavLink key={idx}
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
}

export default withRouter(Header);