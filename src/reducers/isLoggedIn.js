const loggedReducer = (state={}, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {
                name: 'hung',
                logged: true
            };
        case 'LOG_OUT':
            return  {
                name: 'hung',
                logged: false
            };
        default:
            return {
                name: '',
                logged: false
            };
    }
}

export default loggedReducer;