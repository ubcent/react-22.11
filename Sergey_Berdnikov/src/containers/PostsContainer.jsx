import React, { PureComponent, Fragment } from 'react';

import Posts from 'components/Posts';

export default class PostsContainer extends PureComponent
{
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            text: [],
            page: 1,
            limit: 5,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const { page, limit } = this.state;

        this.setState({ loading: true });

        fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
            .then((response) => response.json())
            .then((_text) =>
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    text: prevState.text.concat(_text),
                    page: prevState.page + 1,
                }))
            );

    };

    render() {
        const { text, loading } = this.state;
        return (
            <Fragment>
                {text.length === 0
                    ? 'Loading blog...'
                    : <Posts onLoadMore={this.fetchData} blogs={text} loading={loading}/>
                }
            </Fragment>
        );
    }
}
    
