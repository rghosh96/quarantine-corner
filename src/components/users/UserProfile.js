import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import KitCard from '../kits/KitCard';
import CardColumns from 'react-bootstrap/CardColumns'

const UserProfile = ({profile, auth, likes, kit}) => {
    var userLikes
    if (!auth.uid) return <Redirect to ='/'/>
    console.log(kit)
    console.log(likes)
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

            <CardColumns>
                {
                    kit && kit.map(likedKit => {
                        for (var i in likes) {
                            if (likedKit.id === likes[i].id && likes[i].like === true) {
                                return (
                                <KitCard kit={likedKit} like={likes[i]} key={likedKit.id} /> )
                        }
                    
                    }})
             }
                    
            </CardColumns>
            
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log(state)
    return{
        profile: state.firebase.profile,
        auth: state.firebase.auth,
        likes: state.firestore.ordered.likes,
        kit: state.firestore.ordered.kit
    }
}

export default  compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        return [ 
        {collection: 'kit'},
        {collection: 'users',
        doc: props.auth.uid,
        subcollections: [
            {collection: 'likes'}
        ], storeAs: 'likes'}
    ]})
)(UserProfile);


