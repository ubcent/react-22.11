import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';

import Container from 'components/Container'
import Header from 'components/Header'
import Content from 'components/Content';
import LeftContentBlock from 'components/LeftContentBlock'
import RightContentBlock from 'components/RightContentBlock'
import Footer from 'components/Footer';
import CommentsListContainer from 'containers/CommentsListContainer';
import TopBlogersContainer from 'containers/TopBlogersContainer'

class App extends PureComponent {

  render() {
    return (
      <div>
        <Container>
          <Header/>
          <Content>
            <LeftContentBlock/>
            <RightContentBlock/>
          </Content>
          <Footer/>
        </Container>
        <Container>
          <Header/>
          <Content>
            <CommentsListContainer/>
          </Content>
          <Footer/>
        </Container>
        <Container>
          <Header/>
          <Content>
            <TopBlogersContainer />
          </Content>
          <Footer/>
        </Container>
      </div>
    );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
);