import React, {Component} from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardFooter,
    Button,
    Pagination,
    PaginationItem,
    PaginationLink,
    Popover,
    PopoverHeader,
    PopoverBody,
    Badge,
} from 'reactstrap';
import Modal from './Modal.jsx';
import Carousel from 'components/MyCarousel';

export default class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popoverOpen: false,
        };
    }

    toggle = () => {
        this.setState({
            popoverOpen: !this.state.popoverOpen,
        });
    };

    render() {
        return (
            <div>
                <Modal/>
                <h1 className="my-4">Page Heading <small>Secondary Text</small></h1>
                <Card className="mb-4">
                    <CardImg top width="100%" src="http://placehold.it/750x300" alt="Card image cap"/>
                    <CardBody>
                        <CardTitle tag="h2">Post Title <Badge color="secondary">New</Badge></CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque,
                            nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate
                            voluptatibus possimus, veniam magni quis!</CardText>
                        <Button color="primary" id="Popover1" onClick={this.toggle}>Read More →</Button>
                        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1"
                                 toggle={this.toggle}>
                            <PopoverHeader>Coming soon</PopoverHeader>
                            <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque
                                ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                        </Popover>
                    </CardBody>
                    <CardFooter className="text-muted">Posted on January 1, 2017 by <a href="#">Start
                        Bootstrap</a></CardFooter>
                </Card>
                <Carousel/>
                <Card className="mb-4 mt-4">
                    <CardImg top width="100%" src="http://placehold.it/750x300" alt="Card image cap"/>
                    <CardBody>
                        <CardTitle tag="h2">Post Title</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque,
                            nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate
                            voluptatibus possimus, veniam magni quis!</CardText>
                        <Button color="primary">Read More →</Button>
                    </CardBody>
                    <CardFooter className="text-muted">Posted on January 1, 2017 by <a href="#">Start
                        Bootstrap</a></CardFooter>
                </Card>
                <Card className="mb-4">
                    <CardImg top width="100%" src="http://placehold.it/750x300" alt="Card image cap"/>
                    <CardBody>
                        <CardTitle tag="h2">Post Title</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque,
                            nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate
                            voluptatibus possimus, veniam magni quis!</CardText>
                        <Button color="primary">Read More →</Button>
                    </CardBody>
                    <CardFooter className="text-muted">Posted on January 1, 2017 by <a href="#">Start
                        Bootstrap</a></CardFooter>
                </Card>
                <Pagination listClassName="justify-content-center mb-4">
                    <PaginationItem>
                        <PaginationLink previous href="#">
                            ← Older
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem disabled>
                        <PaginationLink next href="#">
                            Newer →
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </div>
        )
    }
}
