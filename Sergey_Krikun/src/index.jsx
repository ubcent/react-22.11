import React, { PureComponent } from 'react'; // импортируем в каждом файлк jsx
import ReactDOM from 'react-dom'; // нужно импортировать только в точке входа
import Header from './components/Header';
import MainArticle from 'components/MainArticle';
import Footer from 'components/Footer';
import ModalWindow from 'components/ModalWindow';
import FetchingData from 'containers/FetchingData';
import CommentsNew from 'components/CommentsNew';
import FetchingSelectedData from 'containers/FetchingSelectedData';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';


class Layout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      content: 'Aticles_list',
    };
  }

  fetchDataUrl(urlString) {
    let functionComments = [];
    const result = fetch(urlString)
      .then((response) => {
        response.json();
      })
      .then((data) => {
        this.setState((prevState) => ({
          ...prevState,
          comments: prevState.comments.concat(data),
        }))


        /*   return comments; */
      });

    /*  return this.comments;    */
  }

  componentDidMount() {
    this.fetchDataUrl('https://jsonplaceholder.typicode.com/users?_limit=4');

  }

  checkContent(page) {
    this.setState((prevState) => ({
      ...prevState,
      content: page,
    }));
    console.log(this.state); // после первого нажатия в консоле - content: ''

  }


  render() {

    const numberOfPost = 3;
    const userId = 1;
    const limitOfComments = 3;
    const { content } = this.state;
    console.log(content);

    return (
      <div className="layout_main_wrapper">
        <Header />
        <div className="MainContent">
          <p>To change the content use buttons</p>
          <br />
          <button onClick={() => this.checkContent('One_page')}>One article with comments</button>
          <button onClick={() => this.checkContent('Author_page')}>Author page</button>
          <button onClick={() => this.checkContent('List_of_comments')}>List comments</button>
          <button onClick={() => this.checkContent('Aticles_list')}>List of articles</button>
          <br />



          {content == 'Aticles_list' &&
            <FetchingSelectedData postsStringUrl="/posts?_limit=10" usersStringUrl="/users" mainPage="true" />}

          {content == 'One_page' &&
            <FetchingSelectedData postsStringUrl={`/posts/${numberOfPost}`} usersStringUrl={`/users/${userId}`} commentsStringUrl={`/comments?postId=${numberOfPost}&_limit=${limitOfComments}`} articleNumber={numberOfPost} pageOfArticle="true" />
          }

          {content == 'List_of_comments' &&
            <FetchingSelectedData commentsStringUrl="/comments?_limit=20" commentsPage="true" />}

          {content == 'Author_page' &&
            <FetchingSelectedData getUsers="true" usersStringUrl="/users?id=1" />
          }

          <hr />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById('root'));
