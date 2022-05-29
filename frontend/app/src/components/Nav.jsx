import { Link, Navigate } from 'react-router-dom';
import {useAuth} from '../context/Auth.Context'


function Nav(){

    const { user, logout, role } = useAuth();

    function AuthRoute({ children }) {
        return !user ? children : ""
      }
      
      function AuthDiv({ children }) {
        return user ? children : ""
      }

    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="#">Technical Assistant</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <AuthRoute>
                        <li className="nav-item mr-3"><Link to="/">Iniciar Sesión</Link></li>
                        <li className="nav-item"><Link to="/registro">Registrarse</Link></li>
                    </AuthRoute>
                    <AuthDiv>
                    <li className="nav-item mr-3"><Link to="/Clientes">Clientes</Link></li>
                    {console.log('role', role)}
                    <li className="nav-item mr-3"><button className="nav-item btn btn-danger" onClick={() => logout()}> {user.email} (Cerrar sesión)</button></li>
                    </AuthDiv>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;