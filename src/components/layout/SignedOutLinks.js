import React from 'react';
import { NavLink } from 'react-router-dom';
import './../../_main.scss';
import Nav from 'react-bootstrap/Nav';

const SignedOutLinks = () => {
    return (
        <Nav className="mr-auto">
            <Nav.Link href="/users">qomerades</Nav.Link>
            <Nav.Link href="/signin">sign in</Nav.Link>
            <Nav.Link href="/signup">sign up</Nav.Link>
        </Nav>
    );
}

export default SignedOutLinks;