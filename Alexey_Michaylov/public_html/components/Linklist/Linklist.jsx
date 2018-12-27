import './Linklist.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Linklist extends PureComponent {            
    static propTypes = {
        items: PropTypes.array.isRequired,
        column: PropTypes.oneOf(['2','3']),
        className: PropTypes.string,
    }
    
    render() {
        const { items, column, className } = this.props;
        const listClasses = classNames({
            'list-unstyled': true,
            'two-column': column === '2',
            'three-column': column === '3',
        }, className);

        return (
            <ul className={listClasses}>
                {items.map((item, idx) => <li key={idx}><a href={item.href}>{item.title}</a></li>)}
            </ul>
        )
    }
}
