import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { load as loadUsers } from 'actions/users'
import User from 'components/User';

class UserContainer extends PureComponent {
    componentDidMount() {

    }

    render() {
        const { loading, user } = this.props;
        return (
            <Fragment>
                {loading ? 'Loading ...' : <User {...user}/>}
            </Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    const { match } = props;

    return {
        user: state.users.entities.find((user) => user.id === +match.params.id)
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
