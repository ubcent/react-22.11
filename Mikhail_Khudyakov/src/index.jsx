import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'reactstrap';

import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Search from 'components/Search';
import Categories from 'components/Categories';
import Widget from 'components/Widget';
import Footer from 'components/Footer';

import MainPage from 'components/MainPage';
import Blog from 'containers/BlogContainer';
import Comments from 'containers/CommentsContainer';
import Users from 'containers/UsersContainer';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            navHeader: {
                MainPage: {title: 'Home', componentName: <MainPage/>, active: true},
                Blog: {title: 'Blog', componentName: <Blog/>, active: false},
                Comments: {title: 'Comments', componentName: <Comments/>, active: false},
                Users: {title: 'Users', componentName: <Users/>, active: false},
            },

            currentPage: <MainPage/>,
        }
    }

    newPage = (event) => {
        const newPage = event.target.dataset.name;
        const {navHeader} = this.state;
        const page = navHeader[newPage];

        for (let key in navHeader) {
            navHeader[key].active = false;
        }

        this.setState({currentPage: page.componentName});
        page.active = true;
    };

    render() {
        const {navHeader, currentPage} = this.state;
        return (
            <div>
                <Header items={navHeader} newPage={this.newPage}/>
                <Container>
                    <Row>
                        <Col xs="8">
                            {currentPage}
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

ReactDom.render(
    <App/>,
    document.getElementById('body')
);
