import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { load as loadUsers } from 'actions/users';
import UserCard from 'components/UserCard';


class UsersContainer extends PureComponent {
    componentDidMount() {
        const { load } = this.props;

        load();
    }

    render() {
        const { users, loading, load } = this.props;
        return (
            <Container>
                {users.length === 0 ? 'Loading...' : <UserCard onLoadMore={load} users={users} loading={loading} />}
            </Container>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        users: state.users.entities,
        loading: state.users.loading,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);