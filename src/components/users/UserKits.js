import React from 'react';
import KitCard from '../kits/KitCard';
import CardColumns from 'react-bootstrap/CardColumns'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

const UserKits = (props) => {
    console.log(props.location.state.id)
    if (props.location.state.count === 0) {
        return (
            <div className="userkits">
                <h1>{props.location.state.name}'s kits</h1>
                <hr/>
                <p className="center">this user has not submitted any kits ):</p></div>)
    }
    else {
    return (
        <div className="userkits">
        <h1>{props.location.state.name}'s kits</h1>
        <hr/>
            <CardColumns>
               { props.kit && props.kit.map(kit => {
                console.log(kit.id)
                var alike
                if(props.likes) {
                    console.log(props.likes)
                for (var i in props.likes) {
                    console.log(props.likes[i].id)
                    if (props.likes[i].id === kit.id) {
                        console.log(props.likes[i].id)
                        alike = props.likes[i]}
                }}
                if (kit.userId === props.location.state.id) {
                    return (
                        <KitCard kit={kit} like={alike}  key={props.kit.id} />
                    )}
                })} 
            </CardColumns>
            </div>
    
    )}
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        // get kit object from rootReducer, to kits array
        kit: state.firestore.ordered.kit,
        likes: state.firestore.ordered.likes,
        auth: state.firebase.auth
    }
}

export default  compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        if (props.auth.uid) {
        return [ 
        {collection: 'kit'},
        {collection: 'users'},
        {collection: 'users',
        doc: props.auth.uid,
        subcollections: [
            {collection: 'likes'}
        ], storeAs: 'likes'}
    ]}
    else {
        return[{collection: 'kit'},
        {collection: 'users'}]
    }})
)(UserKits);

