import React, {PureComponent, Fragment} from 'react';

import Main from 'components/Main';

export default class PostFormContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            posts: [],
            users: [],
            loading: false,
        }

    }

    componentDidMount() {
        this.fetchData();
        this.fetchDataUser();
    }

    fetchDataUser = () => {
        fetch(`http://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((_users) => {
                this.setState({
                    users: _users,
                })
            })
    };

    fetchData = () => {
        const { page } = this.state;
        this.setState({
           loading: true,
        });
        fetch(`http://jsonplaceholder.typicode.com/posts?_limit=1&_page=${page}`)
            .then((response) => response.json())
            .then((_posts) => {
                this.setState((prevState) => ({
                    loading: false,
                    posts: prevState.posts.concat(_posts),
                    page: prevState.page + 1,
                }))
            });
    };

    render() {
        const {posts, users, loading} = this.state;
        return (
            <Fragment>
                <div>
                    {posts.length === 0 || users.length === 0 ? 'Loading' :  <Main onLoadMore={this.fetchData} posts={posts} users={users} loading={loading}/>}
                </div>
            </Fragment>
        )
    }
}