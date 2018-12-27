import React, { Component } from 'react';
import './Header.css';
import Icon from './icon.png';
import { 
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Container,
} from 'reactstrap';
import Menu from 'components/Menu';

const items = [
    {title: 'Главная', href: '/'},
    {title: 'Новости', href: '/news'},
    {title: 'Блог', href: '/blog'},
    {title: 'Контакты', href: '/contacts',}
];

import ModalWindow from 'components/Login';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render() {
        return(
            <Navbar dark expand="lg" color="info" fixed="top">
                <Container>
                    <NavbarBrand href="/"><img src={Icon} className="logo mr-2" alt="Webpack" />MySuperSite</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Menu items={items} />
                        <ModalWindow />
                    </Collapse>
                </Container>
            </Navbar>
        )
    } 
}
