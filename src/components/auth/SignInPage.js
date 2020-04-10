import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { signIn } from './../../reduxStore/actions/authActions'
import { Redirect } from 'react-router-dom';

class SignInPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState( {
            [e.target.id]: e.target.value,

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state);
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to ='/'/>
        return (
            <div className="authPages">
            <h2>sign in</h2>
            <div className="form">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.handleChange} id="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handleChange} id="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    {authError ? 
                    <Alert variant="primary">
                        <p className="alertText">
                        sorry!!! that email/password combo was not recognized! ):
                        </p>
                    </Alert> : null}
                    </Form>
                    
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage)
