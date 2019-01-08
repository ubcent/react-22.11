import React, { PureComponent, Fragment } from 'react';
import Post from 'components/Post';

export default class PostContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            post: {},
            author: 'Guest',
            comments: [],
        }
    }

    componentDidMount() {
        const { match } = this.props;
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
        .then((response) => response.json())
        .then((_post) => {
            fetch(`https://jsonplaceholder.typicode.com/users/${_post.userId}`)
            .then((response) => response.json())
            .then((_user) => {
                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${_post.id}`)
                .then((response) => response.json())
                .then((_comments) => {
                    this.setState((prevState) => ({
                        ...prevState,
                        loading: false,
                        post: _post,
                        author: _user.name,
                        comments: _comments,
                    }))
                })
            })
        })
    }

    render() {
        const { post, author, comments, loading } = this.state;
        return (
            <Fragment>
                {loading ? 'Loading...' : <Post title={post.title} author={author} body={post.body} comments={comments} />}
            </Fragment>
        )
    }
}
