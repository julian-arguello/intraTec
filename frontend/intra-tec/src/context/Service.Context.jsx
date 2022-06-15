import { createContext, useContext, useReducer } from "react";
import ServiceReducer from "../reducer/Service.Reducer";

import { ActionAdd, ActionRemove, ActionGet, ActionGetId } from "../action/Service.Actions"

import * as API from '../api/service.api';

const ServiceContext = createContext();

//------------------------------------------------------------------------------------------------------------------------------------------

export function ServiceProvider({ children }){
    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(ServiceReducer, { services:[], service: {}})

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

        //function viewAlls
       /* const findServiceId = async (id) =>{
            console.log(id);
            
            API.viewId()
            .then((data)=>{
                dispatch(ActionGet(data))
                
            })
            .catch(function(err){
                console.log('Auth.Context->login()->Error',err.message)
                
            })
        }*/

        //async function findServiceId(id){
            const findServiceId = async (id) =>{
            console.log("findServiceId -> ",id);
             API.viewId(id)
            .then((data)=>{
                console.log("viewId -> ",data)
                dispatch(ActionGetId(data))
            })
            .then(()=>{console.log("state",state)})
        }





    //return
    return(
        <ServiceContext.Provider value={{ state, dispatch, findService, findServiceId}}>
            {children}
        </ServiceContext.Provider>
    );
}
//retornamos el useContext de AuthContext.
export function useService(){
    return useContext(ServiceContext);
}