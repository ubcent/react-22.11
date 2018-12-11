import './Main.css';
import React, {Component} from 'react';

import Aside from '../Aside';

export default class Main extends Component {
    render() {
        return (
<div className="main-center content">
        <main>
            <article>

                <h2>Duis aute irure dolor in henderit in voluptate.</h2>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipop ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
                <p><a href="#" className="more">Continue Reading</a></p>
            </article>
            <article>
                <h2>Duis aute irure dolor in henderit in voluptate.</h2>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipop ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
                <p><a href="#" className="more">Continue Reading</a></p>
            </article>
        </main>
        <Aside />
        <div className="clr"> </div>
        <div className="paper">
            <p className="pre">&larr;<a href="#">Previous</a></p>
            <p className="next"><a href="#">Next</a>&rarr;</p>
        </div>
    </div>
        );
    }
}