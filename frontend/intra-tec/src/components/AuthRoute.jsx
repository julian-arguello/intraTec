import { useAuth } from "../context/Auth.Context"
import { Navigate, Link } from 'react-router-dom'

function Component(children){
    return(
        <div id='main' className='main-margin-open'>
             <Link to='/inicio' className='logo'><h1>Intratec</h1></Link>
            {children}
        </div>
    )
}

function AuthRoute({ children }){
    const { state } = useAuth()
    return(
        
        state.isAuth ? Component(children) : <Navigate to="/" />
    );
}
export default AuthRoute;