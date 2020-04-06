const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNIN_SUCCESS':
            console.log('signin successful!')
            return {
                ...state,
                authError: null
            }
        case 'SIGNIN_ERROR':
            console.log('signin error!')
            return {
                ...state,
                authError: 'Signin failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success!')
            return state
        default:
            return state;
    }
    return state;
}

export default authReducer;