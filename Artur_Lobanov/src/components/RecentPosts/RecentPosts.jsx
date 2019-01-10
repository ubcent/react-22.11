
import './RecentPosts.scss';
import blog_post1 from './blog_post1.jpg';
import blog_post2 from './blog_post2.jpg';
import blog_post3 from './blog_post3.jpg';
import blog_post4 from './blog_post4.jpg';

import React, { PureComponent } from 'react';
import Container from 'components/Container';

export default class RecentPosts extends PureComponent {

    static defaultProps = {}

    render() {
              
        return (
            <div className="RecentPosts">
                <Container>
                    <div className="post_wrapper">
                    <div className="top">
                            <h2>RECENT POSTS</h2>
                            <p>the most recent posts from our blog</p>
                        </div>
                        <div className="bottom">
                            <div className="post_item"><img src={blog_post1} alt=""/><p>Sed do eiusmod tempor incididunt.</p></div>
                            <div className="post_item"><img src={blog_post2} alt=""/><p>Velit esse cillum dollore fugiat nulla.</p></div>
                            <div className="post_item"><img src={blog_post3} alt=""/><p>Officia deserunt mollit est anim laborum.</p></div>
                            <div className="post_item"><img src={blog_post4} alt=""/><p>Culpa qui officia deserunt mollit anim</p></div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
