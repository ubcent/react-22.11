import React, { PureComponent } from 'react'; // импортируем в каждом файлк jsx
import ReactDOM from 'react-dom'; // нужно импортировать только в точке входа

import { Button } from 'reactstrap';
import Header from './components/Header';
import Footer from 'components/Footer';
import ModalWindow from 'components/ModalWindow';
import FetchingSelectedData from 'containers/FetchingSelectedData';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Aticles_list',
    };
  }

  checkContent(page) {
    this.setState((prevState) => ({
      ...prevState,
      content: page,
    }));
  }

  render() {
    const numberOfPost = 3;
    const userId = 1;
    const limitOfComments = 3;
    const { content } = this.state;

    return (
      <div className="layout_main_wrapper">
        <Header />
        <div className="main-content">
          <div className="buttons-wrapper">
            <p>To change the content use buttons</p>
            <br />
            <Button color="info"
              onClick={() => this.checkContent('Aticles_list')}
              className={(this.state.content === 'Aticles_list')
                ? 'active' : null}>
              List of articles
            </Button>
            <Button color="info"
              onClick={() => this.checkContent('One_page')}
              className={(this.state.content === 'One_page')
                ? 'active' : null}>
              One article with comments
            </Button>
            <Button color="info"
              onClick={() => this.checkContent('Author_page')}
              className={(this.state.content === 'Author_page')
                ? 'active' : null}>
              Author page
            </Button>
            <Button color="info"
              onClick={() => this.checkContent('List_of_comments')}
              className={(this.state.content === 'List_of_comments')
                ? 'active' : null}>
              List comments
            </Button>
            <br />
          </div>

          {content == 'Aticles_list' &&
            <FetchingSelectedData
              postsStringUrl="/posts?_limit=10"
              usersStringUrl="/users"
              mainPage="true"
            />
          }

          {content == 'One_page' &&
            <FetchingSelectedData
              postsStringUrl={`/posts/${numberOfPost}`}
              usersStringUrl={`/users/${userId}`}
              commentsStringUrl=
                {`/comments?postId=${numberOfPost}&_limit=${limitOfComments}`}
              articleNumber={numberOfPost}
              pageOfArticle="true"
            />
          }

          {content == 'List_of_comments' &&
            <FetchingSelectedData
              commentsStringUrl="/comments?_limit=10" commentsPage="true"
            />
          }

          {content == 'Author_page' &&
            <FetchingSelectedData getUsers="true"
              usersStringUrl="/users?id=1"
            />
          }

          <hr />
        </div>
        <Footer className="footer" />

      </div >
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById('root'));
