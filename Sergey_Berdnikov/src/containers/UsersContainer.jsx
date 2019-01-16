import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { load as loadUsers } from 'actions/users';

import Users from 'components/Users';

class UsersContainer extends PureComponent {
    componentDidMount() {
        const { load } = this.props;
        //вызов диспетчера
        load();
    }

    render() {
        const { text, loading, load } = this.props;

        return (
            <Fragment>
                {text.length === 0
                    ? 'Loading...'
                    : <Users onLoadNext={load} text={text} loading={loading}/>}
            </Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        text: state.users.entities,
        loading: state.users.loading,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        load: () => dispatch(loadUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);