import React from 'react';
import { NavLink } from 'react-router-dom';
import './../../_main.scss';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const SignedInLinks = () => {
    return (
        <Nav className="mr-auto">
            <Nav.Link href="/addkit">add kit</Nav.Link>
            <Nav.Link href="/">all kits</Nav.Link>
            <Button href="/profile" className='btn-circle'>IV</Button>  
        </Nav>
    );
}

export default SignedInLinks;