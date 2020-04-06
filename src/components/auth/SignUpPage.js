import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class SignUpPage extends Component {
    state = {
        email: '',
        password: '',
        fName: '',
        lName: '',
        major: '',
        state: '',
        classification: ''
    }

    handleChange = (e) => {
        this.setState( {
            [e.target.id]: e.target.value,

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to ='/'/>
        return (
            <div className="authPages">
            <h2>sign up</h2>
            <div className="form">
                <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                <Col>
                    <Form.Label>first name</Form.Label>
                    <Form.Control onChange={this.handleChange} id="fName" placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Label>last name</Form.Label>
                    <Form.Control onChange={this.handleChange} id="lName" placeholder="Last name" />
                    </Col>
                </Form.Row>

                
                <Form.Group  controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={this.handleChange} id="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={this.handleChange} id="password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Row>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control onChange={this.handleChange} id="state" placeholder="ar"/>
                    </Form.Group>
                    
                    <Form.Group as={Col} >
                    <Form.Label>major</Form.Label>
                    <Form.Control onChange={this.handleChange} id="major" placeholder="cs"/>
                    </Form.Group>


                    <Form.Group as={Col}>
                    <Form.Label>Classification</Form.Label>
                    <Form.Control onChange={this.handleChange} id="classification" as="select" value="Choose...">
                        <option>undergraduate</option>
                        <option>graduate</option>
                    </Form.Control>
                    </Form.Group>

                </Form.Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(SignUpPage)
