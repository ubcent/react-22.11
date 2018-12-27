import React, { PureComponent } from 'react';
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
    {title: 'Блог', href: '/blog'},
    {title: 'Коментарии', href: '/comments'},
    {title: 'Пользователи', href: '/users'},
];

import ModalWindow from 'components/Login';

export default class Header extends PureComponent {
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
        const { onChangePage } = this.props;

        return(
            <Navbar dark expand="lg" color="info" fixed="top">
                <Container>
                    <NavbarBrand href="/"><img src={Icon} className="logo mr-2" alt="Webpack" onClick={onChangePage} />MySuperSite</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Menu items={items} toggle={onChangePage} />
                        <ModalWindow />
                    </Collapse>
                </Container>
            </Navbar>
        )
    } 
}
