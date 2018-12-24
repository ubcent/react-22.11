import React, {Component} from 'react';

import {InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';

export default class BlogItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            subtitle: '',
            text: '',
            imgsrc: '',
        }
    }

    handleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    handleSend = () => {
        console.log(this.state);
        const {onBlog} = this.props;
        onBlog(this.state);
        this.setState({
            title: '',
            subtitle: '',
            text: '',
            imgsrc: '',
        })
    };

    render() {
        const {title, subtitle, text, imgsrc} = this.state;

        return (
            <div className="BlogItems">
                <InputGroup>
                    <Input name="title" onChange={this.handleFieldChange} value={title} placeholder="Blog title"/>
                </InputGroup>
                <InputGroup>
                    <Input name="subtitle" onChange={this.handleFieldChange} value={subtitle}
                           placeholder="Blog subtitle"/>
                </InputGroup>
                <InputGroup>
                    <Input name="imgsrc" onChange={this.handleFieldChange} value={imgsrc} placeholder="Img src"/>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupText>
                        <Input name="text" onChange={this.handleFieldChange} value={text} addon type="text"/>
                    </InputGroupText>
                </InputGroup>

                <Button onClick={this.handleSend} color="primary">Send</Button>
            </div>
        )
    }
}
