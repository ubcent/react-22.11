
import './NavMenu.scss';
//import jpg from '';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
// import routes from './routes';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class NavMenu extends PureComponent {

    static defaultProps = {}

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    

    render() {
        const { modal } = this.state;

        return (
            <div className="NavMenu">
                <Link className="nav_item" to="/">Home</Link>
                <Link className="nav_item" to="/blog">Blog</Link>
                <Link className="nav_item" to="/aboutUs">About Us</Link>
                <Link onClick={this.toggle} className="nav_item" id="auth" to="#">Login</Link>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
