import './PostFormComments.css'
import React, {PureComponent} from 'react';

import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';

export default class PostFormComments extends PureComponent {

    render() {
        const {expanded, comments, postId} = this.props;

        const commentsFiltered = comments.filter(comment => {
                return comment.postId === postId;
        });

        return (
            <div className="PostFormComments">
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    {commentsFiltered.map((comment) => <CardContent key={comment.id}>
                            <Typography variant="subtitle2">
                                {comment.name}
                            </Typography>
                            <Typography>
                                {comment.body}
                            </Typography>
                        </CardContent>
                    )}
                </Collapse>
            </div>
        )
    }
}

