import './RTP.css';
import React, {Component} from 'react';
import Container from 'components/Container'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Formlogin from '../Formlogin';
import Header from '../Header';
import routes from '../../routes'


export default class RTP extends Component {
    static defaultProps = {}

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="listall">
                    <Link to="/" className="links">Главная</Link>
                    <Link to="/content" className="links">Публикации</Link>
                    <Link to="/comments" className="links">Комментарии</Link>
                    <Link to="/users" className="links">Пользователи</Link>

                </div>
                <div className="left">
                    <Container>
                        <Switch>
                            {routes.map((route, idx) => <Route key={idx} {...route} />)}
                            {/*<Route exact path="/" component={Main}/>*/}
                            {/*<Route exact path="/content" component={Content}/>*/}
                            {/*<Route exact path="/comments" component={CommentsList}/>*/}
                            {/*<Route exact path="/users" component={Users}/>*/}
                        </Switch>
                    </Container>
                </div>
                <div className="right">
                    <Formlogin/>
                </div>
                <div className="footer">
                    All rights reserved 2019
                </div>
            </div>
        )
    }
}
