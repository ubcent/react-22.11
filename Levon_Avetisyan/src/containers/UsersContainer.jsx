import React, {PureComponent, Fragment} from 'react';

import Users from 'components/Users';

import {connect} from 'react-redux';
import {load as loadUsers} from 'actions/users';

class UsersContainer extends PureComponent {

    componentDidMount() {
        const {loadUsers} = this.props;
        loadUsers();
    }

    render() {
        const {rows} = this.props;
        return (
            <Fragment>
                <Users rows={rows}/>
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        rows: state.users.entities,
        loading: state.users.loading,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        loadUsers: () => dispatch(loadUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)