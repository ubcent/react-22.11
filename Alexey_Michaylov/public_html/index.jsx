import 'bootstrap/dist/css/bootstrap.min.css';
import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import Header from 'components/Header';
import Main from 'components/Main';
import BlogpostList from 'containers/BlogpostListContainer';
import Footer from 'components/Footer';
import Welcomeblock from 'components/Welcomeblock';
import postImage from './img/react.jpg';
import CommentsList from 'containers/CommentsListContainer';
import UsersList from 'containers/UsersListContainer';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pageName: '/',
        };
    }
    
    handleTogglePage = (e) => {
        e.preventDefault();
        const page = e.target.getAttribute('href');
        this.setState({
            pageName: page,
        });
    }
    
    render() {
        const { pageName } = this.state;
        
        return (
            <div>
                <Header onChangePage={this.handleTogglePage} />
                    {pageName === '/' &&
                        <Main head="Главная" second="home">
                            <img src={postImage} alt="" className="img-fluid mb-4" />
                            <Welcomeblock />
                        </Main>
                    }
                    {pageName === '/blog' &&
                        <Main head="Блог" second="blog">
                            <BlogpostList />
                        </Main>
                    }
                    {pageName === '/comments' &&
                        <Main head="Коментарии">
                            <CommentsList />
                        </Main>
                    }
                    {pageName === '/users' &&
                        <Main head="Пользователи">
                            <UsersList />
                        </Main>
                    }
                <Footer />
            </div>
        );
    }
};

ReactDom.render(
    <App />,
    document.getElementById('root')
);
