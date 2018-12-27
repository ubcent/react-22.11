import React, {PureComponent} from 'react';

import Blog from 'components/Blog';

export default class BlogContainer extends PureComponent {
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
                }))
            });
    };

    render() {
        const {posts, loading} = this.state;
        return (
            <div>
                {posts.length === 0 ? <h4 className="mt-4">Loading...</h4> :
                    <Blog onLoadMore={this.fetchData} posts={posts} loading={loading}/>}
            </div>
        )
    }
}
