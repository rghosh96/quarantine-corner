const initState = {
    kits: [
        {id: '1', name: 'ramen & eggs', type: 'food', description: 'quick, easy, cheap, & delicious!'},
        {id: '2', name: 'animal crossing', type: 'games', description: 'super cute game for quarantine!!!'},
        {id: '3', name: 'tiger king', type: 'tv', description: 'not my fav show'}
    ]
}

const kitReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_KIT':
            console.log("added project", action.kit);
            return state;
        case 'ADD_KIT_ERROR':
            console.log("add kit error", action.err);
            return state;
        case 'UPDATE_LIKE':
            console.log("updated like!!", action.kit);
            return state;
        case 'UPDATE_LIKE_ERROR':
            console.log("update like error", action.err);
            return state;
        case 'LIKE_KIT_SUCCESS':
            console.log("like kit success!!", action.kit);
            return state;
        case 'LIKE_KIT_ERROR':
            console.log("like kit error", action.err);
            return state;
        case 'DELETE_KIT_SUCCESS':
            console.log("delete kit success!!", action.kit);
            return state;
        case 'DELETE_KIT_ERROR':
            console.log("delete kit error", action.err);
            return state;
        default:
            return state;
    }
}

export default kitReducer;