import './Aside.css';
import React, { Component } from 'react';
import Search from 'components/Search';
import FormLogin from 'components/FormLogin';

export default class Aside extends Component {
    render() {
        return(
            <aside>
                <div className="sidebar">
                    <h2>Search</h2>
                    <Search />
                </div>
                <div className="sidebar">
                    <h2>categories</h2>
                    <nav>
                        <ul className="categor">
                            <li><a href="#">Weekend</a></li>
                            <li><a href="#">Nature</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Holiday</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="sidebar">
                    <h2>Sign In</h2>
                    <FormLogin />
                </div>
                <div className="sidebar">
                    <h2>Stay Tuned</h2>
                    <div className="subscribe">
                    </div>
                </div>
                <div class="sidebar"> <img src="https://b.radikal.ru/b07/1812/cd/2109a73c8477.jpg" alt="" class="img3" /> </div>
            </aside>
        );
    }
}