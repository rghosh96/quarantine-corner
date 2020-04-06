import authReducer from './authReducer';
import kitReducer from './kitReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    kit: kitReducer,
    firestore: firestoreReducer
    // contains firestore data, automatically syncs/retrieves relevant data!

})

export default rootReducer;