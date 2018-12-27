import React, {Fragment, PureComponent} from 'react';

import Users from 'components/Users';

export default class UsersContaine extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
            page: 0,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const {page} = this.state;
        this.setState({loading: true});
        fetch(`https://jsonplaceholder.typicode.com/users?_limit=3&_page=${page}`)
            .then((response) => response.json())
            .then((_users) => {
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    users: prevState.users.concat(_users),
                    page: prevState.page + 1,
                }))
            });
    };


    render() {
        const {users, loading} = this.state;
        return (
            <Fragment>
                {users.length === 0 ? 'Loading...' :
                    <Users users={users} loading={loading} onLoadMore={this.fetchData}/>}
            </Fragment>
        )
    }
}