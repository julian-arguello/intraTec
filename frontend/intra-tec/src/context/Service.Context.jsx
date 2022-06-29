import { createContext, useContext, useReducer, useState } from "react";
import ServiceReducer from "../reducer/Service.Reducer";

import { ActionAdd, ActionRemove, ActionGet, ActionGetId, ActionUpdate, ActionStateService, ActionGetRecent, ActionGetStatistics } from "../action/Service.Actions"

import * as API from '../api/service.api';

const ServiceContext = createContext();

//------------------------------------------------------------------------------------------------------------------------------------------

export function ServiceProvider({ children }){
    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(ServiceReducer, { statistics: {}, serviceRecent: [], services:[], service: {}, stateService: []})

/*-----------------------------------------------------------------*/
//Estado de los servicios
const findStateService = async () =>{
    try{
       const services = await API.viewAllsState()
       dispatch(ActionStateService(services))
    }
    catch(err){
        console.log('Error',err.message)
    }

}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//traemos todos los servicios
const findService = async () =>{
    try{
        const services = await API.viewAlls()
        dispatch(ActionGet(services))
    }
    catch(err){
        console.log('Error',err.message)
    }
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
//Traemos un servioco por id
const findServiceId = async (id) =>{
    try{
        const service = await API.viewId(id)
        dispatch(ActionGetId(service))
    }
    catch(err){
        console.log('Error',err.message)
    }
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
// Traemos los ultimos servicios
const findServiceRecent = async (cant = 3) =>{
    try{
        await API.viewRecent(cant)
        .then((services) => dispatch(ActionGetRecent(services)))
    }
    catch(err){
        console.log('Error',err.message)
    }
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
// Traemos las estadisticas
const findStatistics = async () =>{
    try{
        const statistics = await API.viewStatistics()
        dispatch(ActionGetStatistics(statistics))
    }
    catch(err){
        console.log('Error',err.message)
    }
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
//Nuevo servicio
const addService = async (service) =>{
    try{
        await API.add(service)
        dispatch(ActionAdd(service))
    }
    catch(err){
        console.log('Error',err.message)
    }   
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
//Editar servicio
const editService = async (service) =>{
    try{
        await API.edit(service)
        dispatch(ActionUpdate(service))
        
    }
    catch(err){
        console.log('Error',err.message)
    } 
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
//Elimina un servicio
const delService = async (id) =>{
    try{
        await API.del(id)
        dispatch(ActionRemove(id))
    }
    catch(err){
        console.log('Error',err.message)
    } 
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

    //return
    return(
        <ServiceContext.Provider value={{ state, dispatch, findService, findServiceId, addService, editService, findStateService, delService, findServiceRecent, findStatistics }}>
            {children}
        </ServiceContext.Provider>
    );
}
//retornamos el useContext de AuthContext.
export function useService(){
    return useContext(ServiceContext);
}