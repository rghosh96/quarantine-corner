import authReducer from './authReducer';
import kitReducer from './kitReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    kit: kitReducer,
    firestore: firestoreReducer,    // for db connection
    firebase: firebaseReducer       // for authentication
    // contains firestore data, automatically syncs/retrieves relevant data!

})

export default rootReducer;