import React, { PureComponent, Fragment } from 'react';
import BlogpostList from 'components/BlogpostList';

export default class BlogpostListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            next: false,
            prev: true,
            posts: [],
            page: 0,
            countPage: 10,
        }
    }
    
    componentDidMount() {
        this.fetchData();
    }
  
    fetchData = (e) => {
        const { page, countPage } = this.state;
        const addition = e && e.target.name === 'prev' ? -1 : 1;
        const currentPage = page + addition;
        this.setState({ prev: currentPage <= 1 });
        this.setState({ next: currentPage >= countPage});
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3&_page=${currentPage}`)
            .then((response) => response.json())
            .then((_posts) => {
                this.setState((prevState) => ({
                    ...prevState,
                    posts: _posts,
                    page: currentPage,
            }))
        });
    }

    render() {
        const { posts, next, prev } = this.state;
        return (
            <Fragment>
                {posts.length === 0 ? 'Loading...' : <BlogpostList onTurnPage={this.fetchData} posts={posts} next={next} prev={prev} />}
            </Fragment>
        )
    }
}
