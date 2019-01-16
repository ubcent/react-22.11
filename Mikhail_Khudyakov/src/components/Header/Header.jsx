import React, {PureComponent} from 'react';
import {Navbar, Container, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';

class Header extends PureComponent {
    getActive = (href) => {
        const {location} = this.props;
        const substr = location.pathname.substr(0, href.length);

        if (href.length === 1 && location.pathname.length !== 1) {
            return false;
        }

        return substr === href;
    };

    render() {
        const {items} = this.props;
        return (
            <header className="pt-5">
                <Navbar fixed="top" color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand tag={Link} to="/">ReactJS</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            {items.map((item, idx) =>
                                <NavItem key={idx}>
                                    <NavLink tag={Link} to={item.href} active={this.getActive(item.href)}>
                                        {item.title}
                                    </NavLink>
                                </NavItem>
                            )}
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        )
    }
}

export default withRouter(Header);
