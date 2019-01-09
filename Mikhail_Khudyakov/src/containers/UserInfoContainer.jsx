import React, {PureComponent} from 'react';

import UserInfo from 'components/UserInfo';

export default class UserInfoContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user: {},
        }
    }

    componentDidMount() {
        const {match} = this.props;
        this.setState({loading: true});
        fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
            .then((response) => response.json())
            .then((_user) => {
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    user: _user,
                }))
            });
    }

    render() {
        const {user, loading} = this.state;
        return (
            <div>
                {loading ? <h4 className="mt-4">Loading...</h4> :
                    <UserInfo {...user}/>}
            </div>
        )
    }
}
