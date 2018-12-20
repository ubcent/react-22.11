import React, { Component } from 'react';
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

export default class Blogpost extends Component {
    static defaultProps = {
        img: 'http://placehold.it/750x300',
    }
    
    static propTypes = {
        head: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        img: PropTypes.string,
    }
        
    render() {
        const { head, date, author, img, children } = this.props;
        return (
            <Card className="mb-4">
                <CardImg top src={img} alt={head} />
                <CardBody>
                    <CardTitle tag="h2">{head}</CardTitle>
                    <CardText>{children}</CardText>
                    <Button tag="a" href="#" color="primary">Read More →</Button>
                </CardBody>
                <CardFooter className="text-muted">
                    Posted on {date} by <a href="#">{author}</a>
                </CardFooter>
            </Card>
        )
    }
}
