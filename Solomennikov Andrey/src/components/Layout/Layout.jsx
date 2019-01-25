import './Layout.css';
import React, {PureComponent} from 'react';
import Content from '../Content';
import Nav from '../Nav';
import Formlogin from '../Formlogin';
import Header from '../Header';
import Main from '../Main';
import CommentsList from 'containers/CommentsListContainer';
import Users from 'containers/UsersListContainer';


export default class Layout extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            mainPage: <Main/>,
            blog: <Content/>,
            comments:<CommentsList/>,
            users: <Users/>,
            currentPage: <Main/>,
        }
    }

    blog = () => {

        let newPage = this.state.blog;

        this.setState({
            currentPage: newPage
        })
    }

    main = () => {

        let newPage = this.state.mainPage;

        this.setState({
            currentPage: newPage
        })
    }

    comments = () => {

        let newPage = this.state.comments;

        this.setState({
            currentPage: newPage
        })
    }

    usersID = () => {

        let newPage = this.state.users;

        this.setState({
            currentPage: newPage
        })
    }



    render(page) {
        const {currentPage} = this.state;
        return (
            <div className="wrapper">
                <Header/>
                <div className="listall">
                <a className = "links" onClick={this.main}>Главная</a>
                <a className = "links" onClick={this.blog}>Публикации</a>
                <a className = "links" onClick={this.comments}>Комментарии</a>
                <a className = "links" onClick={this.usersID}>Пользователи</a>
                </div>
                <div className="content">
                    <div className="left">
                        { currentPage }
                    </div>
                    <div className="right">
                        {/*<Nav/>*/}
                        <Formlogin/>
                    </div>
                </div>
                <div className="footer">
                    All rights reserved 2019
                </div>
            </div>

        )
    }
}