import { createContext, useContext, useReducer, useState } from "react";
import ClientReducer from "../reducer/Client.Reducer";
import { ActionAdd, ActionRemove, ActionGet } from "../action/Client.Actions"
import * as API from '../api/client.api';

const ClientContext = createContext();

//------------------------------------------------------------------------------------------------------------------------------------------

export function ClientProvider({ children }){
    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(ClientReducer, { clients:[] })

    const [loadingClient, setLoadingClient] = useState(false)
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
    //function viewAlls
    const findClient = async () =>{
        setLoadingClient(true)
        await API.viewAlls()
        .then((data)=>{
            dispatch(ActionGet(data))
            setLoadingClient(false)
        })
        .catch(function(err){
            console.error('Client.Context->Error',err.message)
        })
    }
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/


    //return
    return(
        <ClientContext.Provider value={{ state, dispatch, findClient, loadingClient}}>
            {children}
        </ClientContext.Provider>
    );
}
//retornamos el useContext de AuthContext.
export function useClient(){
    return useContext(ClientContext);
}