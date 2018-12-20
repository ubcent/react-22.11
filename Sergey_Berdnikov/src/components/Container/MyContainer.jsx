import './MyContainer.css';
import PropTypes from 'prop-types';

//React импортируем в каждом файле
import React, { Component } from 'react';

export default class MyContainer extends Component
{
    static propTypes = {
        text: PropTypes.oneOf(['some', 'text']).isRequired,
    };

    render() {
        const {text} = this.props;
        const {children} = this.props;
        return (
            <div className="Container">
                <h2>{text}</h2>
                {children}
            </div>
        );
    }
};
