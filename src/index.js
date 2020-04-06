import React from 'react';
import ReactDOM from 'react-dom';
import './_main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, useSelector } from 'react-redux';
import rootReducer from './reduxStore/reducer/rootReducer'
import thunk from 'redux-thunk';
import firebase from 'firebase/app'
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import Spinner from 'react-bootstrap/Spinner'




// creates central redux data store
// pass master reducer to store so they can make changes to it
// pass middleware/thunk to handle asynch requests to database
// pass in extra arguments of firebase & firestore so action creator can interact w db
// const store = createStore(rootReducer, 
//   compose(
//     applyMiddleware(thunk.withExtraArgument(getFirebase, getFirebase))),
//     reduxFirestore(firebaseConfig),
//     reactReduxFirebase(firebaseConfig)
//   );

// create a data store & pass in a reducer to manipulate states
// apply middleware to access database asynchronously to enhance store with extra functionality
// pass in extra arguments for firebase/store into courseAction, for example
const store = createStore(rootReducer, 
  compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  // store enhancers to connect to database
  reduxFirestore(fbConfig),
  )
);

// react-redux-firebase config
// can access state.firebase.profile to get logged in user profile!!
const rrfConfig = {
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  userProfile: 'users'
}

// tbh idk wtf is happening here but i got it off the documentation, bo o m
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

// to make sure authenticate before rendering to dom
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
      if (!isLoaded(auth)) return <div>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
              </div>;
              return children
}

// provider passes store into app so it has access to store (binding layer)

ReactDOM.render(
  <Provider store = {store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
                <App />
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
