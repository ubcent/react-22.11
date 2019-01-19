import React from 'react';
import {Jumbotron} from 'reactstrap';

export default function UserInfo(props) {
    return (
        <div>
            <h1 className="my-4">User Info Page <small>Secondary Text</small></h1>
            <Jumbotron>
                <h1 className="display-5">{props.name}</h1>
                <p className="lead">{props.email}</p>
                <hr className="my-2"/>
                <p>Username: {props.username}</p>
                <p>Phone: {props.phone}</p>
                <p>Website: {props.website}</p>
            </Jumbotron>
        </div>
    )
}
