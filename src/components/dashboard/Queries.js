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
        selection: '',
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
                    <h1 className="title">quarantine corner</h1>
                    <p>pls select a query, & then click kit barcode to view more information!</p>
                    <hr />
                    <Form.Control onChange={this.handleChange} id="selection" as="select" >
                        <option value="query0">please select a query ...</option>
                        <option value="query1">view all kits</option>
                        <option value="query2" >search by username</option>
                        <option value="query3">search by type</option>
                    </Form.Control>

                    {/* view all kits */}
                    {this.state.selection == 'query1' ? 
                    <div>
                        <br></br>
                        <p>here are all the current quarantine kits: </p>
                        <AllKit kits = {this.props}/>
                    </div>
                    : null
                    }

                    {/* search by username */}
                    {this.state.selection == 'query2' ? 
                    <div>
                        <br></br>
                        <p>real-time search for a user's quarantine kits!!! </p>
                        <Form.Control onChange={this.handleChange} id="user" placeholder="enter username" /> 
                        {this.state.user ? <SearchUserKit kits = {this.props} search = {this.state.user}/> : null}
                    </div>
                    : null
                    }

                    {/* search by type */}
                    {this.state.selection == 'query3' ? 
                    <div>
                        <br></br>
                        <p>pls select a type: </p>
                        <Form.Control onChange={this.handleChange} id="type" as="select" >
                            <option>select ..</option>
                            <option value="food">food</option>
                            <option value="games" >games</option>
                            <option value="tv">tv</option>
                            <option value="artsy">artsy</option>
                            <option value="misc">misc</option>
                        </Form.Control>
                        {this.state.type ? <SearchTypeKit kits = {this.props} search = {this.state.type}/> : null}
                    </div>
                    : null
                    }
                    
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
        kit: state.firestore.ordered.kit
    }
}

export default  compose(
    firestoreConnect(() => ['kit']),
    connect(mapStateToProps)
)(Queries);

