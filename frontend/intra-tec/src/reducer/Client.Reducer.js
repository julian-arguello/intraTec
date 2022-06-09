export default function ClientReducer(state, action){
    switch(action.type){
        case "GET":
            return {
                clients:  action.payload   
            }
        case "ADD":
            return{
                clients: [...state, action.payload]
            };
        case "REMOVE":
               return {
                clients: state.clients.filter(client => client.id !== action.payload)
               };
        case "UPDATE":
            return{
                clients:  state.clients.map(client => {
                                if (client.id === action.payload.id) {
                                    return action.payload;
                                }
                                return client;
                            })
                };
        default:
            return state;
    }
}