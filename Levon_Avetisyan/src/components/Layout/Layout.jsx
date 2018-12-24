import React, {Component} from 'react';

import Header from '../Header';
import BlogList from 'components/BlogList';

export default class Layout extends Component {
    render() {
        return (
            <div className="layout container">
                <Header/>
                <BlogList/>
            </div>
        )
    }
}