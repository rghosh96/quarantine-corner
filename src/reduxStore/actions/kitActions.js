export const addKit = (kit) => {
    // dispatch dispatches action to reducer
    // returns to function and halts dispatch
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make asynch db call
        // reference to firestore db
        console.log(kit);
        const firestoreDB = getFirestore();
        // gets profile data from firebase
        const profileInfo = getState().firebase.profile
        // gets userId to associate with user collection when kit is added
        const userId = getState().firebase.auth
        firestoreDB.collection('kit').add({
            name: kit.name,
            type: kit.type,
            description: kit.description,
            user: profileInfo.username,
            likes: 0,
            userId: userId,
            created: new Date()
        }).then(() => {
            // returns promise when finished, & can
            // then continue with dispatch
            dispatch({
                type: 'ADD_KIT',
                kit: kit
            })
        }).catch((err) => {
            dispatch({ 
                type: 'ADD_KIT_ERROR'.
                err
            });
        })
        
    }
}

export const updateLike = (kit, value) => {
    // dispatch dispatches action to reducer
    // returns to function and halts dispatch
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make asynch db call
        // reference to firestore db
        console.log(kit);
        const firestoreDB = getFirestore();
        firestoreDB.collection('kit').doc(kit.id).set({
            ...kit,
            likes: kit.likes + value
        }).then(() => {
            // returns promise when finished, & can
            // then continue with dispatch
            dispatch({
                type: 'UPDATE_LIKE',
                kit: kit
            })
        }).catch((err) => {
            dispatch({ 
                type: 'UDPDATE_LIKE_ERROR',
                err
            });
        })
        
    }
}

export const likeKit = (user, kit, like) => {
    // dispatch dispatches action to reducer
    // returns to function and halts dispatch
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make asynch db call
        // reference to firestore db
        const firestoreDB = getFirestore();
        firestoreDB.collection('users').doc(user.uid).collection('likes').doc(kit.id).set({
            like: like
        }).then(() => {
            // returns promise when finished, & can
            // then continue with dispatch
            dispatch({
                type: 'LIKE_KIT_SUCCESS',
                kit: kit
            })
        }).catch((err) => {
            dispatch({ 
                type: 'LIKE_KIT_ERROR',
                err
            });
        })
        
    }
}

// export const addLike = (user, kit) => {
//     // dispatch dispatches action to reducer
//     // returns to function and halts dispatch
//     return (dispatch, getState, {getFirebase, getFirestore}) => {
//         // make asynch db call
//         // reference to firestore db
//         console.log(kit);
//         const firestoreDB = getFirestore();
//         firestoreDB.collection('users').doc(user.uid).collection('likes').add({
//             kitId: kit.id,
//             like: true
//         }).then(() => {
//             // returns promise when finished, & can
//             // then continue with dispatch
//             dispatch({
//                 type: 'ADDLIKE_KIT_SUCCESS',
//                 kit: kit
//             })
//         }).catch((err) => {
//             dispatch({ 
//                 type: 'ADDLIKE_KIT_ERROR',
//                 err
//             });
//         })
        
//     }
// }