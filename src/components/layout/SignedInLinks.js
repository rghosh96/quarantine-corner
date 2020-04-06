import React from 'react';
import { NavLink } from 'react-router-dom';
import './../../_main.scss';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import { signOut } from './../../reduxStore/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <Nav className="mr-auto">
            <Nav.Link href="/addkit">add kit</Nav.Link>
            <Nav.Link onClick={props.signOut}>sign out</Nav.Link>
            <Button href="/profile" className='btn-circle'>IV</Button>  
        </Nav>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);