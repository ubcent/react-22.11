import React, {Component} from 'react';

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

export default class BlogItem extends Component {

    render() {
        return (
            <div className="BlogItems">
                <Card>
                    <CardImg top width="100%"
                             src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>Blog title</CardTitle>
                        <CardSubtitle>Blog subtitle</CardSubtitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur eligendi enim
                            error eum fugiat harum hic maxime nam nesciunt nulla, perspiciatis praesentium
                            recusandae rem suscipit, tempora tempore, velit vero!
                        </CardText>
                        <Button>Read</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
