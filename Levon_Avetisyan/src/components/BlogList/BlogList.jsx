import './BlogList.css'
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

import BlogItem from 'components/BlogItem';

export default class BlogList extends Component {
    static defaultProps = {}

    constructor(props) {
        super(props);

        this.state = {
            blogItems: [],
        }
    }

    handleBlog = (blog) => {
        this.setState((prevState) => ({
            blogItems: prevState.blogItems.concat(blog)
        }))
    };

    render() {
        console.log(this.state);
        const { blogItems } = this.state;
        return (
            <div className="BlogList">
                {blogItems.map((blog, idx) =>
                    <Card key={idx}>
                        <CardImg top width="100%"
                                 src={blog.imgsrc}
                                 alt="Card image cap"/>
                        <CardBody>
                            <CardTitle>{blog.title}</CardTitle>
                            <CardSubtitle>{blog.subtitle}</CardSubtitle>
                            <CardText>{blog.text}</CardText>
                            <Button>Read</Button>
                        </CardBody>
                    </Card>)}

                <BlogItem onBlog={this.handleBlog}/>
            </div>
        )
    }
}