import './PostFormComments.css'
import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';

export default class PostFormComments extends PureComponent {
    static defaultProps = {}

    render() {
        const {expanded, comments} = this.props;
        return (
            <div className="PostFormComments">
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    {comments.map((comment) => <CardContent key={comment.id}>
                            <Typography paragraph>{comment.name}</Typography>
                            <Typography paragraph>
                                {comment.body}
                            </Typography>
                        </CardContent>
                    )}
                </Collapse>
            </div>
        )
    }
}

