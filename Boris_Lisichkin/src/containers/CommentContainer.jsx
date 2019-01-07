import React, { PureComponent, Fragment } from 'react';
import { Container } from 'reactstrap';

import Comment from 'components/Comment';

class CommentContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            comment: {},
        }
    }

    componentDidMount() {
        const { match } = this.props;
        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
            .then((response) => response.json())
            .then((_comment) => {
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    comment: _comment,
                }))
            });
    }

    render() {
        const { comment, loading } = this.state;
        return (
            <Container>
                <Fragment>
                    {loading ? 'Loading...' : <Comment {...comment} />}
                </Fragment>
            </Container>
        )
    }
}

export default CommentContainer;