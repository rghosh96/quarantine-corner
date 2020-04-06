import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux'
import { addKit } from './../../reduxStore/actions/kitActions'

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
    }

    render() {
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
                        <option>food</option>
                        <option>games</option>
                        <option>tv</option>
                        <option>artsy</option>
                        <option>misc</option>
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

export default connect(null, mapDispatchToProps)(AddKit);
