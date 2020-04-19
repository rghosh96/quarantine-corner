import React, { Component } from 'react';
import SearchUserKit from '../kits/SearchUserKit';
import AllKit from '../kits/AllKit';
import SearchTypeKit from '../kits/SearchTypeKit';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import Form from 'react-bootstrap/Form';

class Queries extends Component {
    state = {
        selection: 'query1',
        user: '',
        type: ''
    }

    handleChange = (e) => {
        this.setState( {
            [e.target.id]: e.target.value,

        })
        console.log(this.state);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                
                <div className="queryArea">
                <img src="../../logo.png" />
                    <h1 className="title">quarantine corner</h1><br/>
                    <p>welcome to quarantine corner! here, you can view "kits," which are simple suggestions for things
                        to do during quarantine (such as a videogame, a workout, a food recipe, etc!). if you are a user, you can add your own kits, and like other people's to add them to your collection! 
                        pls select which quarantine kits to view, & then click kit barcode to view more information about that kit!</p>
                    <hr />
                    <div className="queries">
                    <div className="directions">
                    <Form.Control onChange={this.handleChange} id="selection" as="select" >
                        <option value="query0">select an option...</option>
                        <option value="query1">view all kits</option>
                        <option value="query2" >view kits by user</option>
                        <option value="query3">view kits by type</option>
                    </Form.Control> 
                    </div>
                    <br></br>
                    <hr></hr>

                    {/* view all kits */}
                    {this.state.selection == 'query1' ? 
                    <div>
                        <br></br>
                        <p className="directions">here are all the current quarantine kits: </p>
                        <AllKit kits = {this.props}/>
                    </div>
                    : null
                    }

                    {/* search by username */}
                    {this.state.selection == 'query2' ? 
                    <div >
                        <br></br>
                        <p className="directions">type in the username. if no kits are displayed, the username is 
                            either not recognized or that user has not added any kits yet!
                        </p>
                        <div className="directions">
                        <Form.Control onChange={this.handleChange} id="user" placeholder="enter username" />  </div>
                        {this.state.user ? <SearchUserKit kit = {this.props.kit} likes = {this.props.likes} search = {this.state.user}/> : null}
                    </div>
                    : null
                    }

                    {/* search by type */}
                    {this.state.selection == 'query3' ? 
                    <div>
                        <br></br>
                        <p className="directions">pls select a type: </p>
                        <div className="directions">
                        <Form.Control onChange={this.handleChange} id="type" as="select" >
                            <option>select ..</option>
                            <option value="food/drinks">food/drinks</option>
                            <option value="games" >games</option>
                            <option value="movies/tv">movies/tv</option>
                            <option value="music">music</option>
                            <option value="health/exercise">health/exercise</option>
                            <option value="arts/diy">arts/diy</option>
                            <option value="misc">misc</option>
                        </Form.Control> </div>
                        {this.state.type ? <SearchTypeKit kit = {this.props.kit} likes = {this.props.likes} search = {this.state.type}/> : null}
                    </div>
                    : null
                    }
                    
                </div>
                </div>
            </div>

        )
    }
}

// map state from store to props, takes in state of store
// queries will grab data from the store & then pass it to all its children components
const mapStateToProps = (state) => {
    console.log(state);
    return {
        // get kit object from rootReducer, to kits array
        kit: state.firestore.ordered.kit,
        likes: state.firestore.ordered.likes,
        users: state.firestore.ordered.users,
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
)(Queries);

