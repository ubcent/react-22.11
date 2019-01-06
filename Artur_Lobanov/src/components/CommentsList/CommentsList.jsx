
import './CommentsList.scss';

import React, { PureComponent } from 'react';
// import CommentsForm from 'components/CommentsForm';
import { Link } from 'react-router-dom';

import Container from 'components/Container';
import img from './blog_post1.jpg'

export default class CommentsList extends PureComponent {

    // static defaultProps = {}

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         comments: [],
    //     }
    // }

    // handleComment = (comment) => {
    //     this.setState((prevState) => ({
    //         comments: prevState.comments.concat([comment])
    //     }));
    // }

    render() {
        // const { comments } = this.state;  
        const { comments, loading, onLoadMore } = this.props;  
        return (
            <div className="CommentsList">              
                <h2>BLOG</h2>
                <Container>
                    <div className="listWrapper">
                    {comments.map((comment) => <div className="post_item" key={comment.id}><Link to={`/comments/${comment.id}`}><img src={img} alt=""/><h4>{comment.name}</h4><p>{comment.body}</p></Link></div>)}
                    </div>
                </Container>
                <button className="load_posts" onClick={onLoadMore} disabled={loading}>Load more</button>
            </div>
        )
    }
}
