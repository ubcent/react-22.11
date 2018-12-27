import './Layout.css';

import React, {Component} from 'react';

import Header from '../Header';
import BlogListContainer from 'containers/BlogListContainer';

export default class Layout extends Component {
    render() {
        return (
            <div className="layout container">
                <Header/>
                <div className="main">
                    <BlogListContainer/>
                </div>
            </div>
        )
    }
}