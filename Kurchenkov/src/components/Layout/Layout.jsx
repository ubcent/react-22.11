import './Layout.css';
import React from 'react';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

// stateless
export default function Layout(props) {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};
