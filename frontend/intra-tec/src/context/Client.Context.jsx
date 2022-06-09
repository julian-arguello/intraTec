import { createContext, useContext, useReducer } from "react";
import ClientReducer from "../reducer/Client.Reducer";
import { ActionAdd, ActionRemove, ActionGet } from "../action/Client.Actions"
import * as API from '../api/client.api';

const ClientContext = createContext();

//------------------------------------------------------------------------------------------------------------------------------------------

export function ClientProvider({ children }){
    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(ClientReducer, { clients:[]})

    //function viewAlls
    const findClient = async () =>{
        API.viewAlls()
        .then((data)=>{
            dispatch(ActionGet(data))
        })
        .catch(function(err){
            console.error('Client.Context->Error',err.message)
            
        })
    }



    //return
    return(
        <ClientContext.Provider value={{ state, dispatch, findClient}}>
            {children}
        </ClientContext.Provider>
    );
}
//retornamos el useContext de AuthContext.
export function useClient(){
    return useContext(ClientContext);
}