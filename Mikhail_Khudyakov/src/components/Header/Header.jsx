import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    Container,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    NavLink
} from 'reactstrap';

import Login from './Login.jsx';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const {items} = this.props;

        return (
            <header>
                <Navbar color="light" light expand="md">
                    <Container>
                        <NavbarBrand href="/">ReactJS</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                {items.map((item) =>
                                    <NavItem>
                                        <NavLink href={item.href}>{item.title}</NavLink>
                                    </NavItem>
                                )}
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <Login/>
                                <Button color="link">Sing Up</Button>{' '}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
