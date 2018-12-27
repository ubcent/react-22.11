import React, {PureComponent, Fragment} from 'react';

import UserSide from 'components/UserSide';

export default class UserSideContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            modal: false
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    getUser = () => {
        const { user } = this.props;
        this.state = {
            user: user,
        };
        fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
            .then((response) => response.json())
            .then((_user) => {
                this.setState(() => ({
                    user: _user,
                }));
            });
        this.toggle();
        console.log(this.props);
        console.log(this.state);
    };


    render() {
        const {user, modal} = this.state;
        console.log(this.props);
        return (
            <Fragment>
                <UserSide onShowUserModal={this.getUser} user={user} modal={modal} toggle={this.toggle}/>
            </Fragment>
        )
    }
}