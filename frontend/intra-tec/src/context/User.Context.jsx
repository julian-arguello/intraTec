import { createContext, useContext, useReducer } from "react";

import UserReducer from "../reducer/User.Reducer";

import { ActionAdd, ActionRemove, ActionGet, ActionGetId, ActionUpdate } from "../action/User.Actions"

import * as API from '../api/user.api';

const UserContext = createContext();

/*-----------------------------------------------------------------*/
export function UserProvider({ children }){
    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(UserReducer, { users:[], user: {} })


/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//traemos todos los Users.
const findUser = async () =>{
    try{
        const users = await API.viewAlls()
        dispatch(ActionGet(users))
    }
    catch(err){
        console.log('Error',err.message)
    }
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
//Traemos un User por id.
const findUserId = async (id) =>{
    try{
        const user = await API.viewId(id)
        dispatch(ActionGetId(user))
    }
    catch(err){
        console.log('Error',err.message)
    }
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
//Nuevo User.
const addUser = async (user) =>{
    try{
        await API.add(user)
        dispatch(ActionAdd(user))
    }
    catch(err){
        console.log('Error',err.message)
    }   
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
//Editar User.
const editUser = async (user) =>{
    try{
        await API.edit(user)
        dispatch(ActionUpdate(user))
        
    }
    catch(err){
        console.log('Error',err.message)
    } 
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
//Elimina un User
const delUser = async (id) =>{
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
        <UserContext.Provider value={{ state, dispatch, findUser, findUserId, addUser, editUser, delUser }}>
            {children}
        </UserContext.Provider>
    );
}
//retornamos el useContext de AuthContext.
export function useUser(){
    return useContext(UserContext);
}