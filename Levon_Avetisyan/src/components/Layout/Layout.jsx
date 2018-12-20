import React, {Component} from 'react';

import Header from '../Header';
import BlogItem from '../BlogItem';

export default class Layout extends Component {
    render() {
        return (
            <div className="layout container">
                <Header/>
                <BlogItem/>
            </div>
        )
    }
}