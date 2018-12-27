import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Navbar color="warning" light expand="md">
                    <NavbarBrand className="brand" href="/">PROGRAMMING BLOG</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto mynavBar" navbar>
                            <NavItem>
                                <NavLink href="/components/">Library</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Blogs
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Blog 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        blog 2
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <div className="myLogin">
                            <Button color="danger" onClick={this.toggle}>LOGIN</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Please enter your login and password</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="exampleEmail"
                                                   placeholder="exampl@mail.com"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword"
                                                   placeholder="password"/>
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>LOGIN</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>CANCEL</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                        <div className="mySignup">
                            <Button color="info" onClick={this.toggle}>SIGN UP</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Please enter your login and password</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="exampleEmail"
                                                   placeholder="exampl@mail.com"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword"
                                                   placeholder="password"/>
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>SIGN UP</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>CANCEL</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
