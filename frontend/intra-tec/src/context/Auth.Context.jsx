import { createContext, useContext, useReducer } from "react";
import AuthReducer from "../reducer/Auth.Reducer";
import { ActionLogin, ActionLogout, ActionError } from "../action/Auth.Actions"
import * as API from '../api/auth.api';

const AuthContext = createContext();

//------------------------------------------------------------------------------------------------------------------------------------------

export function AuthProvider({ children }){
    //useReduce
    //useReducer recibe dos parametros (funcion reduce, {states por defectos})
    const [state, dispatch] = useReducer(AuthReducer, {isAuth:false, user:null, error:null})

    //function login
    const login = async (email, password) =>{
        console.log("Auth.Context->login()")
        API.login(email, password)
        .then((data)=>{
            console.log('Auth.Context->TOKEN',data.token);
            console.log('Auth.Context->USER',data.user);
            localStorage.setItem('auth-token', data.token)
            localStorage.setItem('user', JSON.stringify (data.user))
            dispatch(ActionLogin(data.user))
        })
        .catch(function(err){
            console.log('Auth.Context->login()->Error',err.message)
            dispatch(ActionError(err.message))
        })
    }

    const logout = () =>{
        console.log('Auth.Context->login()->logout')
        localStorage.removeItem('auth-token');
        localStorage.removeItem('user');
        dispatch(ActionLogout())
    }

    //return
    return(
        <AuthContext.Provider value={{ state, dispatch, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
//retornamos el useContext de AuthContext.
export function useAuth(){
    return useContext(AuthContext);
}