import React, { Component } from 'react';
import './Header.css';
import { 
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
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
            <header>
                <Navbar dark expand="md" color="info">
                    <NavbarBrand href="/">MySuperSite</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Menu items={items} />
                        <ModalWindow />   
                    </Collapse>
                </Navbar>
            </header> 
        )
    } 
}