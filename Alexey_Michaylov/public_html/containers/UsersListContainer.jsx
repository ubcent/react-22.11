import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import UsersList from 'components/UsersList';
import { load as loadUsers } from 'actions/users';

class UsersListContainer extends PureComponent {
    componentDidMount() {
        const { load } = this.props;
        load();
    }

    render() {
        const { users } = this.props;
        return (
            <Fragment>
                <UsersList users={users} />
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        users: state.users.entities,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
