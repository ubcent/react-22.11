import React, { PureComponent, Fragment } from 'react';
import UsersList from 'components/UsersList';

export default class UsersListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }
    }
    
    componentDidMount() {
        this.getUsersList();
    }
    
    getUsersList = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((_users) => {
                this.setState((prevState) => ({
                    ...prevState,
                    users: prevState.users.concat(_users),
            }))
        });
    }
    
    render() {
        const { users } = this.state;
        return (
            <Fragment>
                <UsersList users={users} />
            </Fragment>
        )
    }
}
