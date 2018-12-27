import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';

import UserCard from 'components/UserCard';

class UsersContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
            page: 1,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const { page } = this.state;
        this.setState({ loading: true });
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
    }

    render() {
        const { users, loading } = this.state;
        return (
            <Container>
                {users.length === 0 ? 'Loading...' : <UserCard onLoadMore={this.fetchData} users={users} loading={loading} />}
            </Container>
        )
    }
}

export default UsersContainer;