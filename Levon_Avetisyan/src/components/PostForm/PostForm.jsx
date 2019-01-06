import './PostForm.css'
import React, {PureComponent} from 'react';

import PostFormCommentsContainer from 'containers/PostFormCommentsContainer';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
    card: {
        width: 600,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class PostForm extends PureComponent {

    render() {
        const {classes, user, title, body, postId} = this.props;
        return (
            <div className="PostForm">
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                {user.name.slice(0, 1)}
                            </Avatar>
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title={title}
                        subheader={user.name}
                    />
                    <CardContent>
                        <Typography component="p">
                            {body}
                        </Typography>
                    </CardContent>
                    <PostFormCommentsContainer postId={postId} />
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(PostForm);