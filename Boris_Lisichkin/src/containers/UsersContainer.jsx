import React, { PureComponent, Fragment } from 'react';
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
                <Fragment>
                    {users.length === 0 ? 'Loading...' : <UserCard onLoadMore={load} users={users} loading={loading} />}
                </Fragment>
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