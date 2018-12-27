import React, {PureComponent, Fragment} from 'react';

import BlogList from 'components/BlogList';

export default class BlogListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            posts: [],
            page: 0,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const {page} = this.state;
        this.setState({loading: true});
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
            .then((response) => response.json())
            .then((_posts) => {
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    posts: prevState.posts.concat(_posts),
                    page: prevState.page + 1,
                }));
            });

    };


    render() {
        const {posts, loading} = this.state;
        return (
            <Fragment>
                {posts.length === 0 ? 'Loading...' :
                    <BlogList onShowMore={this.fetchData} posts={posts} loading={loading}/>}
            </Fragment>
        )
    }
}