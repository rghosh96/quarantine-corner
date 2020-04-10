import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const UserProfile = ({profile, auth}) => {
    console.log(profile);
    if (!auth.uid) return <Redirect to ='/'/>
    return (
        <div className = "authPages">
            <h1> User Profile. </h1>
            <div className="profile">
            <div className="profileInfo">
                <Row>
                    <Col className="fixed"><h3>name </h3> </Col>
                    <Col ><p> {profile.fName} {profile.lName} </p></Col>
                </Row> 
                <Row >
                    <Col className="fixed"><h3>username </h3> </Col>
                    <Col ><p> {profile.username} </p></Col>
                </Row>
                <Row>
                    <Col className="fixed"><h3>email </h3> </Col>
                    <Col ><p> {profile.email}  </p></Col>
                </Row> 
                <Row >
                    <Col className="fixed"><h3>major </h3> </Col>
                    <Col ><p> {profile.major} </p></Col>
                </Row>
                <Row >
                    <Col className="fixed"><h3>state </h3> </Col>
                    <Col ><p> {profile.state} </p></Col>
                </Row>
                <Row >
                    <Col className="fixed"><h3>u/grad </h3> </Col>
                    <Col ><p> {profile.classification} </p></Col>
                </Row>
            </div>
            </div>
            
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log(state)
    return{
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(UserProfile);

