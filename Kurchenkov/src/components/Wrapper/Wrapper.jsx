import './Wrapper.css';
import React, { Component } from 'react';
import Content from '../Content';
import Footer from '../Footer';

export default class Wrapper extends Component{
    render(){
        return(
            <div class="wrapper">
                <Content />
                <Footer />
            </div>
        );
    };
};
