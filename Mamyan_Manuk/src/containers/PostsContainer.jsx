import React, {Fragment, PureComponent} from 'react';

import Posts from 'components/Posts';

export default class PostsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            posts: [],
            page: 0,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const {page} = this.state;
        this.setState({loading: true});
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3&_page=${page}`)
            .then((response) => response.json())
            .then((_posts) => {
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    posts: prevState.posts.concat(_posts),
                    page: prevState.page + 1,
                }))
            });
    };


    render() {
        const {posts, loading} = this.state;
        return (
            <Fragment>
                {posts.length === 0 ? 'Loading...' : <Posts posts = {posts} loading = {loading} onLoadMore = {this.fetchData} />}
            </Fragment>
        )
    }
}