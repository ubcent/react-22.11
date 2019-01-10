import './Footer.css';
import React from 'react';

// stateless
export default function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <span className="copyright">Copyright &copy; Your Website 2018</span>
            </div>
        </div>
    );
};
