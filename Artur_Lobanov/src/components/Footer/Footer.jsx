import './Footer.css';

import React, { Component } from 'react';
// import classNames from 'classnames';


export default class Footer extends Component {
    render(){
        // console.log(this.props);//тут получили свойство объекта
        // const { size } = this.props;

        // const headerClasses = classNames({
        //     header: true,
        //     'header-small' : size === 'small',
        //     'header-big' : size === 'big'

        // })
        return (
            <footer className="footer">
                <div className="footer_content container">
                    <div className="footer_item">
                        <h3>Navigation</h3>
                        <ul>
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                    </div>
                    <div className="footer_item">
                    <h3>Contacts</h3>
                        <ul>
                            <li><a href="#">Phone</a></li>
                            <li><a href="#">Address</a></li>
                            <li><a href="#">Another</a></li>
                        </ul>
                    </div>
                    <div className="footer_item">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eius possimus inventore perferendis quam distinctio sed minima officia ab repudiandae similique sint harum aliquid rerum commodi neque ad, autem minus.</p>
                    </div>
                
                </div>
                <div className="footer_bottom">
                    <div className="container">
                    <p className="signed">Made by Lobanov Arthur 2018 	&copy;</p>
                    </div>
                </div>
            </footer>
        )
    }
}