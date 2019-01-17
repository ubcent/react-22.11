import React from 'react';
import { 
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardFooter, 
    Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Blogpost(props) {
    const { postId, head, date, author, img, children } = props;
    return (
        <Card className="mb-4">
            <CardImg top src={img} alt={head} />
            <CardBody>
                <CardTitle tag="h2">{head}</CardTitle>
                <CardText>{children}</CardText>
                <Button tag={Link} to={`/blog/${postId}`} color="primary">Read More →</Button>
            </CardBody>
            <CardFooter className="text-muted">
                Posted on {date} by <a href="#">{author.name}</a>
            </CardFooter>
        </Card>
    )
}
Blogpost.defaultProps = {
    date: '26.12.18',
    author: {name: 'Guest'},
    img: 'http://placehold.it/750x300',
};
Blogpost.propTypes = {
    postId: PropTypes.number.isRequired,
    head: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    img: PropTypes.string,
};
