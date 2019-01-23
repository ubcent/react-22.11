import React, { PureComponent } from 'react';
import { Button, Container, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class CommentsList extends PureComponent {
    render() {
        const { comments, loading, onLoadMore } = this.props;

        return (
            <div className="CommentsList">
                <Container>
                    <h1 className="my-4">Comments</h1>

                    {comments.map((comment) =>
                        <Media key={comment.id} className="border rounded p-2 my-3">
                            <Media body>
                                <Media heading>
                                    <Link to={`/comment/${comment.id}`}>
                                        {comment.name}
                                    </Link>
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