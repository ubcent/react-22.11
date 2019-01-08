import React, { PureComponent, Fragment } from 'react';

import User from 'components/User';

export default class UserContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user: [],
        }
    }

    componentDidMount() {
        const { match } = this.props;
        fetch(`http://jsonplaceholder.typicode.com/users/${match.params.id}`)
            .then((response) => response.json())
            .then((_user) =>
                this.setState((prevState) => ({
                    ...prevState,
                    user: _user,
                    loading: false,
                }))
            )
    }

    render() {
        const { loading, user } = this.state;
        return (
            <Fragment>
                {loading ? 'Loading ...' : <User {...user}/>}
            </Fragment>
        );
    }
}

    
