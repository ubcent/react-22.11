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
import PropTypes from 'prop-types';

export default function Blogpost(props) {
    return (
        <Card className="mb-4">
            <CardImg top src={props.img} alt={props.head} />
            <CardBody>
                <CardTitle tag="h2">{props.head}</CardTitle>
                <CardText>{props.children}</CardText>
                <Button tag="a" href="#" color="primary">Read More →</Button>
            </CardBody>
            <CardFooter className="text-muted">
                Posted on {props.date} by <a href="#">{props.author}</a>
            </CardFooter>
        </Card>
    )
}
Blogpost.defaultProps = {
    date: '26.12.18',
    author: 'Alex',
    img: 'http://placehold.it/750x300',
};
Blogpost.propTypes = {
    head: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string,
};
