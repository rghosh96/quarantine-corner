export const signIn = (creds) => {
    return (dispatch, getState, {getFirebase}) => {
        // get firebase instance
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword (
            creds.email,
            creds.password
        ).then(() => {
            dispatch({ type: 'SIGNIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'SIGNIN_ERROR'})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        // get firebase instance
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp = (newUser) => {
    // firebase for auth, firestore to store user data in users collections
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        // create user
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            // create new document for this user in users collection
            return firestore.collection('users').doc(resp.user.uid).set({
                email: newUser.email,
                fName: newUser.fName,
                lName: newUser.lName,
                major: newUser.major,
                state: newUser.state,
                classification: newUser.classification,
                initials: newUser.fName[0] + newUser.lName[0],
                username: newUser.email.split('@')[0] })
            }).then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS'})
            }).catch(err => {
                dispatch({ type: 'SIGNUP_ERROR', err})
            })
    }
}