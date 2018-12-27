import './UserSide.css'
import React, {PureComponent} from 'react';

import {
    Card,
    CardText,
    CardLink,
    CardBody,
    CardSubtitle,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

export default class UserSide extends PureComponent {
    static defaultProps = {}

    constructor(props) {
        super(props);
    }

       render() {
        const {user, modal, toggle, onShowUserModal} = this.props;
        return (
            <div className="UserSide">
                <Button onClick={onShowUserModal} color="info" size="sm">Posted by user {user.name}</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>{user.name}</ModalHeader>
                    <ModalBody>
                        <Card>
                            <CardBody>
                                <CardSubtitle>Username: {user.username}</CardSubtitle>
                            </CardBody>
                            <CardBody>
                                <CardText>Some quick example </CardText>
                                <CardLink href="#">Card Link</CardLink>
                                <CardLink href="#">Another Link</CardLink>
                            </CardBody>
                        </Card>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>OK</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}