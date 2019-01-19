import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import UserInfo from 'components/UserInfo';
import {load as loadUsers} from 'actions/users';

class UserInfoContainer extends PureComponent {
    componentDidMount() {
        const {load, user} = this.props;

        if (!user) {
            load();
        }
    }

    render() {
        const {user, loading} = this.props;
        return (
            <div>
                {loading ? <h4 className="mt-4">Loading...</h4> :
                    <UserInfo {...user}/>}
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    const {match} = props;
    const user = state.users.info.find((user) => user.id === +match.params.id);
    return {
        user,
        loading: state.users.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        load: () => dispatch(loadUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer);
