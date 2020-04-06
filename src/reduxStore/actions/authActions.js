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