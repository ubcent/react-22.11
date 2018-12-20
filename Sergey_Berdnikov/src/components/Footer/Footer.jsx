import './Footer.css';

//React импортируем в каждом файле
import React, { Component } from 'react';
import Navbar from "reactstrap/lib/Navbar";

export default class Footer extends Component
{
    static defaultProps = {};

    render() {
        return (
            <div className="Footer">
                Copyright © Your Website 2018
            </div>
        );
    }
};
    
