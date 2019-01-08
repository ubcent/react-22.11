import './Footer.css';

//React импортируем в каждом файле
import React from 'react';
import { Navbar } from 'reactstrap';

//stateless
export default function Footer() {
    return (
        <div className="Footer">
            <Navbar color="dark" dark expand="md" fixed="bottom">
                <strong className="tac">Copyright © Your Website 2019</strong>
            </Navbar>
        </div>
    );
}

    
