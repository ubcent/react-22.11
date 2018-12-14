import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from '../Header';
import Navs from '../Navs';


const NavHeader = [
    {title: 'Home', href: '#'},
    {title: 'News', href: '#'},
    {title: 'Blog', href: '#'}
];

const MainMenu = [
    {title: 'Home', href: '#'},
    {title: 'Link', href: '#'},
    {title: 'News', href: '#'},
    {title: 'Link', href: '#'},
    {title: 'Blog', href: '#'}
];

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header items={NavHeader}/>
                <Container>
                    <Row>
                        <Col xs="2"><Navs items={MainMenu}/></Col>
                        <Col xs="10" className="mt-2">{this.props.children}</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
