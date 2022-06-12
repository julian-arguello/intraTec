import { Link } from 'react-router-dom';
import { useAuth } from '../context/Auth.Context';

function Navbar(){
    const { state, logout } = useAuth()

    return(
        <nav className="navbar navbar-expand-lg bg-dark text-white">
            <div className="container-fluid">

                <Link className="navbar-brand text-white" to='/inicio'>Intratec</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link text-white active" aria-current="page" to='/inicio'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white" to='/clientes'>Clientes</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-white" to='/servicios'>Servicios</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link text-white dropdown-toggle" to='/perfil' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {state.user.email}
                        </Link>
                        <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item text-white" to='/perfil'>Ver perfil</Link></li>
                            <li><Link className="dropdown-item text-white" to="#">Editar</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item text-white" onClick={() => logout()}>Cerrar Session</button></li>
                        </ul>
                        </li>
                    </ul>
                    <Link className="nav-link text-white btn btn-outline-primary p-1 px-4 mx-3" aria-current="page" to='#'>
                        <strong> + Añadir Servicio</strong>
                    </Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;