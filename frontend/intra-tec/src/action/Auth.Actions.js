//LOGIN
export function ActionLogin( user ){
    return {
        type: 'LOGIN',
        payload: user
    };
}
//LOGOUT
export function ActionLogout(){
    return {
        type: 'LOGOUT',
        payload: null
    };
}
//ERROR
export function ActionError(error){
    return {
        type: 'ERROR',
        payload: error
    };
}