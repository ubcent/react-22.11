import React, { PureComponent, Fragment } from 'react';

import Users from 'components/Users';

export default class UsersListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
            page: 0,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const { page } = this.state;
        this.setState({loading: true});
        fetch(`https://jsonplaceholder.typicode.com/users?_limit=10&_page=${page}`)
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
                    <Users onLoadMore={this.fetchData} users={users} loading={loading}/>}
            </Fragment>
        )
    }
}