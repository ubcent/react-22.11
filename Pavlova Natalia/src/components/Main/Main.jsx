import './Main.css';
import React, {Component} from 'react';

export default class Main extends Component {
    render() {
        return (
            <div class="main-center content">
            <main>
                <article>
                    <header class="twice-header"> <img src="images/01.jpg" alt=""> </header>
                    <h2>Duis aute irure dolor in henderit in voluptate.</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipop ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
                    <p><a href="#" class="more">Continue Reading</a></p>
                </article>
                <article>
                    <header> <img src="images/02.jpg" alt=""> </header>
                    <h2>Duis aute irure dolor in henderit in voluptate.</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipop ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
                    <p><a href="#" class="more">Continue Reading</a></p>
                </article>
            </main>
            <aside>
                <div class="sidebar">
                    <h2>Search</h2>
                    <form action="" method="get">
                        <input type="search" placeholder="What are you looking for?" class="sear"> </form>
                </div>
                <div class="sidebar">
                    <h2>categories</h2>
                    <nav>
                        <ul class="categor">
                            <li><a href="">Weekend</a></li>
                            <li><a href="">Nature</a></li>
                            <li><a href="">Work</a></li>
                            <li><a href="">Holiday</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="sidebar">
                    <h2>Stay Tuned.</h2>
                    <div class="subscribe">
                        <form action="" method="get">
                            <input type="email" placeholder="Your Email" class="mail"> </form> <img src="images/btm.jpg" alt="" class="btm"> </div>
                </div>
                <div class="sidebar"> <img src="images/03.jpg" alt="" class="img3"> </div>
            </aside>
            <div class="clr"> </div>
            <div class="paper clearfix">
                <p class="pre">&larr;<a href="">Previous</a></p>
                <p class="next"><a href="">Next</a>&rarr;</p>
            </div>
        </div>
        );
    }
}