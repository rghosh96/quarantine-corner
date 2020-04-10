import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux'
import { addKit } from './../../reduxStore/actions/kitActions'
import { Redirect } from 'react-router-dom';
class AddKit extends Component {
    state = {
        name: '',
        type: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState( {
            [e.target.id]: e.target.value,

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // pass in state to addKit which is handled by dispatcher
        this.props.addKit(this.state);
        // redirects user to home page
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;
        // redirect if not signed in!
        if (!auth.uid) return <Redirect to ='/signin'/>
        console.log(this.props);
        console.log(this.state);

        return (
            <div className="authPages">
            <h2>add a kit</h2>
            <div className="form">
                <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                <Col>
                    <Form.Label>name</Form.Label>
                    <Form.Control onChange={this.handleChange} id="name" placeholder="kit name" />
                    </Col>
                    <Form.Group as={Col}>
                    <Form.Label>type</Form.Label>
                    <Form.Control onChange={this.handleChange} id="type" as="select" >
                        <option>select ..</option>
                        <option >food/drinks</option>
                        <option >games</option>
                        <option >movies/tv</option>
                        <option >music</option>
                        <option >health/exercise</option>
                        <option >arts/diy</option>
                        <option >misc</option>
                    </Form.Control>
                    </Form.Group>
                </Form.Row>

                    <Form.Label>description</Form.Label>
                    <Form.Control onChange={this.handleChange} id="description" as="textarea" aria-label="With textarea" />
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addKit: (kit) => dispatch(addKit(kit))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddKit);
