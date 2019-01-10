
import './Comment.scss';

import React, { PureComponent } from 'react';

import Container from 'components/Container';
import Header from 'components/Header';
import img from './blog_post1.jpg'

export default class Comment extends PureComponent {

    static defaultProps = {}

    render() {

        const { name, body } = this.props;
              
        return (
            <div className="Comment">
                <Header />
                <Container>
                    <div className="commentWrapper">
                    <img src={img} width="50%"alt=""/>
                    <h2>{name}</h2>
                    <p>{body}</p>
                    </div>
                </Container>
            </div>
        )
    }
}
