import React, {PureComponent, Fragment} from 'react';

import Users from 'components/Users';

export default class UsersContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.setState({
            loading: true,
        });
        fetch(`http://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((_users) => {
                this.setState(() => ({
                    loading: false,
                    rows: _users,
                }))
            });
    };
    
    render() {
        const {rows} = this.state;
        return (
            <Fragment>
                <Users rows={rows}/>
            </Fragment>
        )
    }
}