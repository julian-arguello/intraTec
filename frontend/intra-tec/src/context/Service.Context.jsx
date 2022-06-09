import { createContext, useContext, useReducer } from "react";
import ServiceReducer from "../reducer/Service.Reducer";

import { ActionAdd, ActionRemove, ActionGet } from "../action/Service.Actions"

import * as API from '../api/service.api';

const ServiceContext = createContext();

//------------------------------------------------------------------------------------------------------------------------------------------

export function ServiceProvider({ children }){
    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(ServiceReducer, { services:[]})

    //function viewAlls
    const findService = async () =>{
        API.viewAlls()
        .then((data)=>{
            dispatch(ActionGet(data))
        })
        .catch(function(err){
            console.log('Auth.Context->login()->Error',err.message)
            
        })
    }



    //return
    return(
        <ServiceContext.Provider value={{ state, dispatch, findService}}>
            {children}
        </ServiceContext.Provider>
    );
}
//retornamos el useContext de AuthContext.
export function useService(){
    return useContext(ServiceContext);
}