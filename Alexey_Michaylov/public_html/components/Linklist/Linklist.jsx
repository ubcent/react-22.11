import './Linklist.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Linklist extends Component {            
    static propTypes = {
        items: PropTypes.array.isRequired,
        column: PropTypes.oneOf(['2','3']),
        addclass: PropTypes.string,
    }
    
    render() {
        const { items, column, addclass } = this.props;
        const listClasses = classNames({
            'list-unstyled': true,
            'two-column': column === '2',
            'three-column': column === '3',
        }, addclass);

        return (
            <ul className={listClasses}>
                {items.map((item, idx) => <li key={idx}><a href={item.href}>{item.title}</a></li>)}
            </ul>
        )
    }
}
