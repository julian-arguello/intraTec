//GET
export function ActionGet( clients ){
    return {
        type: 'GET',
        payload: clients
    };
}
//ADD
export function ActionAdd( client ){
    return {
        type: 'ADD',
        payload: client
    };
}
//REMOVE
export function ActionRemove( client ){
    return {
        type: 'REMOVE',
        payload: client
    };
}
//UPDATE
export function ActionUpdate( client ){
    return {
        type: 'UPDATE',
        payload: client
    };
}