import React, {Fragment, PureComponent} from 'react';

import Comments from 'components/Comments';

export default class CommentsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            comments: [],
            page: 0,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const {page} = this.state;
        this.setState({loading: true});
        fetch(`https://jsonplaceholder.typicode.com/comments?_limit=5&_page=${page}`)
            .then((response) => response.json())
            .then((_comments) => {
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    comments: prevState.comments.concat(_comments),
                    page: prevState.page + 1,
                }))
            });
    };


    render() {
        const {comments, loading} = this.state;
        return (
            <Fragment>
                {comments.length === 0 ? 'Loading...' : <Comments comments = {comments} loading = {loading} onLoadMore = {this.fetchData} />}
            </Fragment>
        )
    }
}