import { createContext, useContext, useReducer } from "react";
import ServiceReducer from "../reducer/Service.Reducer";

import { ActionAdd, ActionRemove, ActionGet, ActionGetId, ActionUpdate, ActionStateService } from "../action/Service.Actions"

import * as API from '../api/service.api';

const ServiceContext = createContext();

//------------------------------------------------------------------------------------------------------------------------------------------

export function ServiceProvider({ children }){
    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(ServiceReducer, { services:[], service: {}, stateService: [] })

/*-----------------------------------------------------------------*/
//Estado de los servicios
const findStateService = async () =>{
    API.viewAllsState()
    .then((data)=>{
        dispatch(ActionStateService(data))
    })
    .catch(function(err){
        console.log('Auth.Context->login()->Error',err.message)
        
    })
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//function viewAlls traemos todos los servicios
const findService = async () =>{
    API.viewAlls()
    .then((data)=>{
        dispatch(ActionGet(data))
    })
    .catch(function(err){
        console.log('Auth.Context->login()->Error',err.message)
        
    })
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
//Tremos un servioco por id
    const findServiceId = async (id) =>{
        API.viewId(id)
        .then((data)=>{
            dispatch(ActionGetId(data))
        })
    }
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
//Nuevo servicio
    const addService = async (service) =>{
            API.add(service)
        .then((data)=>{
            dispatch(ActionAdd(data))
        })
        .then(()=>{console.log("state",state)})
        }
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
//Editar servicio
const editService = async (service) =>{
        API.edit(service)
    .then((data)=>{
        dispatch(ActionUpdate(data))
    })
    .then(()=>{console.log("state",state)})
    }
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/


    //return
    return(
        <ServiceContext.Provider value={{ state, dispatch, findService, findServiceId, addService, editService, findStateService}}>
            {children}
        </ServiceContext.Provider>
    );
}
//retornamos el useContext de AuthContext.
export function useService(){
    return useContext(ServiceContext);
}