import { createContext, useState, useContext, useEffect } from "react";
import API from '../api/auth.api';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();


//se encarga de manejar todo la info de Clientes.
export function AuthProvider(props) {
    const navigate = useNavigate();
    const [user, setUser] = useState(false)
    const [role, setRole] = useState('')

//unicamente cuando recarga
    useEffect( async () =>{

    const user = await localStorage.getItem('user')

    if(user){
        const currentUser = JSON.parse(user)
        setUser(currentUser)
        setRole(currentUser.role.role_name)
        navigate('/clientes')
    }
    console.log(user)
    console.log('Context.Auth')

    }, [])


//login
const login = async(email, password) =>{
    console.log('Context.Auth.login', email, password)
    await API.authUser(email, password)
        .then((data) => {
            console.log('Inicie sesión hola', data)
            setUser(data)
            console.log('data.role.role_name', data.role.role_name)
            setRole(data.role.role_name)
        })
}


const logout = () =>{
    console.log('Logout')
    navigate('/')
    setUser(false)
    localStorage.removeItem('token')
    localStorage.removeItem('user')

}

const isAdmin = () => {
    console.log('isAdmin',role)
    if(role == 'admin') return true

}

const register = (email, password) => {
    console.log('register', email, password)
    API.userRegister(email, password)
        .then((data)=>{
            console.log('register then',data )
            navigate('/')
        })
        
}

    return (
        <AuthContext.Provider value={{ login, user, logout, role, isAdmin, register }}>
            {console.log('AuthContext.Provider')}
            {props.children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useClients debe utilizarse dentro de un AuthProvider");
    }
    return context;
}