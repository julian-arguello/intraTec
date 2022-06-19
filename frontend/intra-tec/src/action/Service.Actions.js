//GET
export function ActionGet( services ){
    return {
        type: 'GET',
        payload: services
    };
}
//GETID
export function ActionGetId( service ){
    return {
        type: 'GETID',
        payload: service
    };
}
//ADD
export function ActionAdd( service ){
    return {
        type: 'ADD',
        payload: service
    };
}
//REMOVE
export function ActionRemove( service ){
    return {
        type: 'REMOVE',
        payload: service
    };
}
//UPDATE
export function ActionUpdate( service ){
    return {
        type: 'UPDATE',
        payload: service
    };
}
//STATE
export function ActionStateService( states ){
    return {
        type: 'STATE',
        payload: states
    };
}