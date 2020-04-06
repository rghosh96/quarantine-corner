import React from 'react';
import { Link } from 'react-router-dom';
import './../../_main.scss';
import Navbar from 'react-bootstrap/Navbar';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">quarantine corner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <SignedInLinks/>
                    <SignedOutLinks/>
            </Navbar.Collapse>
            </Navbar>
            
    );
}

export default Navigation;