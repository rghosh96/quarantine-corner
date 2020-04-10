import React from 'react';
import { Link } from 'react-router-dom';
import './../../_main.scss';
import Navbar from 'react-bootstrap/Navbar';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';


const Navigation = (props) => {
    const { auth, profile } = props;
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">quarantine corner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    {auth.uid ? <SignedInLinks profile = {profile} /> : <SignedOutLinks/>}
            </Navbar.Collapse>
            </Navbar>
            
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navigation);