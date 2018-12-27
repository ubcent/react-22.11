import React, { PureComponent } from 'react';
import { Button, Container, Media } from 'reactstrap';

export default class CommentsList extends PureComponent {
    render() {
        const { comments, loading, onLoadMore } = this.props;

        return (
            < div className="CommentsList">
                <Container>
                    <h1 className="my-4">Comments</h1>

                    {comments.map((comment, idx) =>
                        <Media key={idx} className="border rounded p-2 my-3">
                            <Media body>
                                <Media heading>
                                    {comment.name}
                                </Media>
                                {comment.body}
                            </Media>
                        </Media>
                    )}

                    <Button onClick={onLoadMore} size="sm" block color="danger" disabled={loading}>LoadMore</Button>
                </Container>
            </div>
        )
    }
}