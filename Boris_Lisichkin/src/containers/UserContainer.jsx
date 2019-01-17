import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { load as loadUsers } from 'actions/users';
import User from 'components/User';


class UserContainer extends PureComponent {
    componentDidMount() {
        const { load, user } = this.props;

        if (!user) {
            load();
        }
    }

    render() {
        const { user, loading } = this.props;
        return (
            <Container>
                {loading ? 'Loading...' : <User {...user} />}
            </Container>
        )
    }
}

function mapStateToProps(state, props) {
    const { match } = props;

    const user = state.users.entities.find((user) => user.id === +match.params.id)
    return {
        user,
        loading: state.users.loading,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);