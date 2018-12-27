import React, {PureComponent} from 'react';

import Comments from 'components/Comments';

export default class CommentsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            comments: [],
            page: 0,
        }
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
            <div>
                {comments.length === 0 ? <h4 className="mt-4">Loading...</h4> :
                    <Comments onLoadMore={this.fetchData} comments={comments} loading={loading}/>}
            </div>
        )
    }
}
