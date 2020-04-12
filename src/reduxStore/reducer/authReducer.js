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
        case 'SIGNUP_SUCCESS':
            console.log('signup success!')
            return { 
                ...state, 
                authError: null }
        case 'SIGNUP_ERROR':
            console.log('signup error!')
            return { 
                ...state, 
                authError: action.err.message }
        default:
            return state;
    }
}

export default authReducer;