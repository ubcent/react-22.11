import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from 'components/Header';
import Main from 'components/Main';
import Blogpost from 'components/Blogpost';
import Footer from 'components/Footer';
import Welcomeblock from 'components/Welcomeblock';

class App extends Component {
    render() {
        const postImage = require('./img/react.jpg');
        
        return (
            <div>
                <Header />
                <Main head="Page Heading" second="Secondary Text">
                    <Blogpost head="Post Title" date="18.12.2018" author="Alex" img={postImage}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
                    </Blogpost>
                    <Blogpost head="Side Widget" date="10.12.2018" author="Start Bootstrap">
                        You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                    </Blogpost>
                </Main>
                <Welcomeblock />
                <Footer />
            </div>
        );
    }
};

ReactDom.render(
    <App />,
    document.getElementById('root')
);
