import './Main.css';
import React, {Component} from 'react';
import Aside from 'components/Aside';
import Toggle from 'components/Toggle';

export default class Main extends Component {
    render() {
        return (
            <div className="main-center content">
                <div className="main">
                    <main className="main-inside">
                        <article className="article">
                            <img src="https://b.radikal.ru/b19/1812/df/e612dba7f42b.jpg" alt="img" />
                            <h2>Duis aute irure dolor in henderit in voluptate.</h2>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipop ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
                            <Toggle />
                        </article>
                        <article className="article">
                            <img src="https://c.radikal.ru/c35/1812/34/e785490bfa3d.jpg" alt="" />
                            <h2>Duis aute irure dolor in henderit in voluptate.</h2>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipop ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
                            <Toggle />
                        </article>
                    </main>
                    <Aside />
                </div>
                <div className="paper">
                    <p className="pre">&larr;<a href="#">Previous</a></p>
                    <p className="next"><a href="#">Next</a>&rarr;</p>
                </div>
            </div>
        );
    }
}