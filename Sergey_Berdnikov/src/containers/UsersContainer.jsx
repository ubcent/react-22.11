import React, { PureComponent, Fragment } from 'react';

import Users from 'components/Users';

export default class UsersContainer extends PureComponent
{
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            page: 1,
            text: [],
            limit: 10,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const { page, limit } = this.state;
        this.setState({ loading: true });
        fetch(`http://jsonplaceholder.typicode.com/users?_limit=${limit}&_page=${page}`)
            .then((response) => response.json())
            .then((_text) =>
                /**
                 * Вот такой вариант записи вызвал бы мутирование стейта
                 * this.state.text = _text
                 */

                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    text: _text,
                    page: prevState.page + 1,
                }))
            );
    };

    render() {
        const { text, loading } = this.state;

        return (
            <Fragment>
                {text.length === 0
                    ? 'Loading...'
                    : <Users onLoadNext={this.fetchData} text={text} loading={loading}/>}
            </Fragment>
        );
    }
}
    
