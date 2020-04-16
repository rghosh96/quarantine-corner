import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import UserKits from './UserKits';

const AllUsers = ({kit, users}) => {
    console.log(users);
    console.log(kit);
    return (
        <div className = "authPages">
            <h1> All our Contributers. </h1>
            <p className="center">here are all of our users who have contributed suggestions for things for you to do during quarantine!</p>
            <hr/>
            <CardColumns>
            { users && users.map(user => {
                    var count = 0;
                    // map thru kits on each user & count how many 
                    { kit && kit.map(akit => {
                        if(akit.userId === user.id) {
                            count++;
                        }
                    })}
                    return (
                        <Card>
                            <Card.Body>
                            <Card.Title><Link to={
                                {
                                    pathname: '/userkits',
                                    state: {
                                        id: user.id,
                                        count: count,
                                        name: user.username
                                    }
                                }
                            }>{user.username}</Link></Card.Title>
                            <Card.Text>
                                <span className="identifier">name: &nbsp;<p className="kitName">{user.fName} {user.lName}</p></span>
                                <span className="identifier">major: &nbsp;<p className="kitName">{user.major}</p></span>
                                <span className="identifier">classification: &nbsp;<p className="kitName">{user.classification}</p></span>
                                <span className="identifier">state: &nbsp;<p className="kitName">{user.state}</p></span>
                                <span className="identifier">email: &nbsp;<p className="kitName">{user.email}</p></span>
                                <span className="identifier">kits: &nbsp;<p className="kitName"> {count}</p></span>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </CardColumns>
            

            
        </div>
    )
}

// map state from store to props, takes in state of store
// queries will grab data from the store & then pass it to all its children components
const mapStateToProps = (state) => {
    console.log(state);
    return {
        // get kit object from rootReducer, to kits array
        kit: state.firestore.ordered.kit,
        users: state.firestore.ordered.users

    }
}

export default  compose(
    firestoreConnect(() => ['kit', 'users']),
    connect(mapStateToProps)
)(AllUsers);

