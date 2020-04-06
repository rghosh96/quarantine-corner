export const addKit = (kit) => {
    // dispatch dispatches action to reducer
    // returns to function and halts dispatch
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make asynch db call
        // reference to firestore db
        console.log(kit);
        const firestoreDB = getFirestore();
        firestoreDB.collection('kit').add({
            name: kit.name,
            type: kit.type,
            description: kit.description,
            user: 'icevixen',
            rating: 2,
            userId: 1,
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