import React, { PureComponent, Fragment } from 'react';

import Blog from 'components/Blog';

export default class BlogContainer extends PureComponent
{
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            text: [],
            page: 0,
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
            .then((_text) => {
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    text: prevState.text.concat(_text),
                    page: prevState.page + 1,
                }))
            });

    };

    render() {
        const { text, loading } = this.state;
        return (
            <Fragment>
                {text.length === 0
                    ? 'Loading blog...'
                    : <Blog onLoadMore={this.fetchData} blogs={text} loading={loading}/>
                }
            </Fragment>
        );
    }
}
    
