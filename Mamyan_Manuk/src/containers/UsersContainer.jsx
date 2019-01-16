import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';

import Users from 'components/Users';
import {load as loadUsers} from 'actions/users';

class UsersContainer extends PureComponent {

    componentDidMount() {
        const {load} = this.props;
        load();
    }




    render() {
        const {users, loading} = this.props;
        return (
            <Fragment>
                {users.length === 0 ? 'Loading...' :
                    <Users users={users} loading={loading} onLoadMore={this.fetchData}/>}
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        users: state.users.entities,
        loading: state.users.loading
    }
}


function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);