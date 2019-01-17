import './Layout.css';
import React, {PureComponent} from 'react';
import Content from '../Content';
import Nav from '../Nav';
import Formlogin from '../Formlogin';
import Header from '../Header';
import Main from '../Main';
import Users from '../Users';
import CommentsList from 'containers/CommentsListContainer';
//import CommentsList from '../CommentsList';


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
                <a onClick={this.main}>Главная</a>
                <a onClick={this.blog}>Публикации</a>
                <a onClick={this.comments}>Комментарии</a>
                <a onClick={this.usersID}>Пользователи</a>
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