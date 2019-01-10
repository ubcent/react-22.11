import './User.css';

//React импортируем в каждом файле
import React from 'react';
import { Button } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

//stateless
export default function User(props) {
    return (
        <div className="User">
            <pre>
                id: {props.id}, <br/>
                name: {props.name},<br/>
                username: {props.username},<br/>
                email: {props.email},<br/>
                phone: {props.phone},<br/>
                website: {props.website}<br/>
            </pre>
            <Button tag={RRNavLink} to={'/'} color="secondary">Back</Button>
        </div>
    );
};
