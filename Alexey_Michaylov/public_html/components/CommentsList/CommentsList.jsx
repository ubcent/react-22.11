import React from 'react';
import { Media, Button } from 'reactstrap';

export default function CommentsList(props) {
    return (
        <section>
            {props.comments.map((comment, idx) =>
                <Media key={idx} className="mb-4">
                    <Media object src="http://placehold.it/50x50" alt="Generic placeholder image" className="mr-3 rounded-circle" />
                    <Media body>
                        <Media heading tag="h5" className="mt-0">{comment.name}</Media>{comment.body}
                    </Media>
                </Media>)
            }
            <p className="text-center mb-4">
                <Button outline color="info" onClick={props.onLoadMore} disabled={props.loading}>LoadMore</Button>
            </p>
        </section>
    )
}
