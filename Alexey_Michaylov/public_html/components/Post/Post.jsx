import React from 'react';
import { Button, Form, FormGroup, Input, Media } from 'reactstrap';
import Main from 'components/Main';
import Widget from 'components/Widget';
import Comment from 'components/Comment';
import PropTypes from 'prop-types';

export default function Post(props) {
    const { title, author, date, img, body, comments } = props;
    return (
        <Main head={title}>
            <p className="lead">by <a href="#">{author}</a></p><hr />
            <p>Posted on {date}</p><hr />
            <img src={img} className="img-fluid rounded" alt={title} /><hr />
            <p className="lead">{body}</p><hr />
            <Widget head="Leave a Comment:">
                <Form>
                    <FormGroup>
                        <Input type="textarea" name="text" />
                    </FormGroup>
                    <Button type="submit" color="primary">Submit</Button>
                </Form>
            </Widget>
            {comments.length > 0 && comments.map((comment, idx) => <Comment key={idx} {...comment} />)}
        </Main>
    )
}

Post.defaultProps = {
    date: '06.01.19',
    img: 'http://placehold.it/900x300',
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    img: PropTypes.string,
    comments: PropTypes.array,
};
