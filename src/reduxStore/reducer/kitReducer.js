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
        default:
            return state;
    }
}

export default kitReducer;