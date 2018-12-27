import React, {Component} from 'react';
import {Container, Row, Col,} from 'reactstrap';
import Header from 'components/Header';
import Search from 'components/Search';
import Categories from 'components/Categories';
import Widget from 'components/Widget';
import Footer from 'components/Footer';

const NavHeader = [
    {title: 'Home', href: '#'},
    {title: 'About', href: '#'},
    {title: 'Services', href: '#'},
    {title: 'Contact', href: '#'},
];

export default class Layout extends Component {
    render() {
        const {children} = this.props;

        return (
            <div>
                <Header items={NavHeader}/>
                <Container>
                    <Row>
                        <Col xs="8">
                            {children}
                        </Col>
                        <Col xs="4">
                            <Search/>
                            <Categories/>
                            <Widget/>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}
