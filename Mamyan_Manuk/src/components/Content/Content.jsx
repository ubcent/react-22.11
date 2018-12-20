import './Content.css';

import React, {Component} from 'react';
import CommentForm from "components/CommentForm/CommentForm";

export default class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: [],
        }
    }

    handleComment = (comment) => {
        this.setState((prevState) => ({
            comments: prevState.comments.concat([comment])
        }));
    };

    render() {
        const {comments} = this.state;
        return (
            <div className="myContent">
                <div>
                    <h1>Post Title</h1>
                    <p>
                        <span className="span">by</span><a href="#">Start Bootstrap</a>
                    </p>
                    <hr/>
                    <p>Posted on January 1, 2018 at 12:00 PM</p>
                    <hr/>
                    <img src="http://placehold.it/900x300" alt=""/>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero,
                        obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis
                        eligendi eos magni recusandae laborum minus inventore?</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum
                        quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat.
                        Temporibus, voluptatibus.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto
                        blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione
                        repellat perspiciatis. Enim, iure!</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas
                        placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem
                        obcaecati?</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo,
                        aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                        recusandae? Qui, necessitatibus, est!</p>

                    <hr/>
                    <div className="media mb-4">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                        <div className="media-body">
                            <h5 className="mt-0">Author</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                            condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                    </div>
                    {comments.map((comment, idx) => <div className="media mb-4">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>
                        <div key={idx} className="media-body"><h5
                            className="mt-0">{comment.author}</h5>{comment.message}</div>
                    </div>)}
                </div>
                <CommentForm onComment={this.handleComment}/>
            </div>
        )
    }
}