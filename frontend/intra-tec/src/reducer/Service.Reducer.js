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
            return {
                ...state,
                services: [ ...state.services, action.payload ]
            }

        case "UPDATE":
            
            return {
                ...state,
                services: state.services.map(service => {
                    if (service.id === action.payload.id) {
                        return action.payload;
                    }
                    return service;
                })
            }

        case "REMOVE":
            return state.filter(service => service.id !== action.payload);


        case "STATE":
            return {
                ...state,
                stateService:  action.payload   
            }

        default:
            return state;
    }
}