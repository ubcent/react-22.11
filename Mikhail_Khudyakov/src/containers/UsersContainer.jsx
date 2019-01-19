import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Users from 'components/Users';
import {load as loadUsers} from 'actions/users';
import {Delete} from 'actions/deletepage';

class UsersContainer extends PureComponent {
    componentDidMount() {
        const {load} = this.props;
        load();
    }

    componentWillUnmount() {
        const {Delete, info} = this.props;
        info.splice(5);
        Delete();
    }

    render() {
        const {info, loading, load} = this.props;
        return (
            <div>
                {info.length === 0 ? <h4 className="mt-4">Loading...</h4> :
                    <Users onLoadMore={load} users={info} loading={loading}/>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        info: state.users.info,
        loading: state.users.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load: () => dispatch(loadUsers()),
        Delete: () => dispatch(Delete()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
