import React from 'react';
import {Jumbotron} from 'reactstrap';

export default function PostDetails(props) {
    return (
        <div>
            <h1 className="my-4">Post Details Page <small>Secondary Text</small></h1>
            <Jumbotron>
                <h1 className="display-5">id: {props.id}</h1>
                <p className="lead">{props.title}</p>
                <hr className="my-2"/>
                <p>{props.body}</p>
            </Jumbotron>
        </div>
    )
}
