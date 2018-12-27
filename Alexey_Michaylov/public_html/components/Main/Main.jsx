import React from 'react';
import {
    Container,
    Row,
    Col,
    InputGroup,
    InputGroupAddon,
    Button,
    Input,
} from 'reactstrap';
import Widget from 'components/Widget';
import Linklist from 'components/Linklist';
import Paging from 'components/Paging';

const links = [
    {title: 'Web Design', href: '#'},
    {title: 'HTML', href: '#'},
    {title: 'Freebies', href: '#'},
    {title: 'JavaScript', href: '#'},
    {title: 'CSS', href: '#'},
    {title: 'Tutorials', href: '#'},
];

export default function Main(props) {
    return(
        <Container>
            <Row>
                <Col xs="12" md="8">
                    <h1 className="my-4">
                        {props.head} {props.second && <small>{props.second}</small>}
                    </h1>
                    {props.children}
                </Col>
                <Col xs="12" md="4">
                    <Widget head="Search">
                        <InputGroup>
                            <Input placeholder="Search for..." />
                            <InputGroupAddon addonType="append">
                                <Button>Go!</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Widget>
                    <Widget head="Categories">
                        <Linklist items={links} column="2" className="mb-0" />
                    </Widget>
                </Col>
            </Row>
        </Container>
    )
}
