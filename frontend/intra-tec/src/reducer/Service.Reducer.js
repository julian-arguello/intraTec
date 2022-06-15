export default function ServiceReducer(state, action){
    switch(action.type){
        case "GET":
            return {
                ...state,
                services:  action.payload   
            }
        case "GETID":
            return {
                ...state,
                service:  action.payload   
            }

        case "ADD":
            return[ ...state, action.payload ];
        case "REMOVE":
               return state.filter(service => service.id !== action.payload);
        case "UPDATE":
            return state.map(service => {
                if (service.id === action.payload.id) {
                    return action.payload;
                }
                return service;
            });
        default:
            return state;
    }
}