import React from 'react';
import { Button, Form, FormGroup, Input, Media } from 'reactstrap';
import Main from 'components/Main';
import Widget from 'components/Widget';
import Comment from 'components/Comment';
import PropTypes from 'prop-types';

export default function Post(props) {
    const { post, author, date, img, comments } = props;
    return (
        <Main head={post.title}>
            <p className="lead">by <a href="#">{author.name}</a></p><hr />
            <p>Posted on {date}</p><hr />
            <img src={img} className="img-fluid rounded" alt={post.title} /><hr />
            <p className="lead">{post.body}</p><hr />
            <Widget head="Leave a Comment:">
                <Form>
                    <FormGroup>
                        <Input type="textarea" name="text" />
                    </FormGroup>
                    <Button type="submit" color="primary">Submit</Button>
                </Form>
            </Widget>
            {comments.length === 0 ? 'Loading...' : comments.map((comment, idx) => <Comment key={idx} {...comment} />)}
        </Main>
    )
}

Post.defaultProps = {
    author: {name: 'Guest'},
    date: '06.01.19',
    img: 'http://placehold.it/900x300',
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    img: PropTypes.string,
    comments: PropTypes.array,
};
