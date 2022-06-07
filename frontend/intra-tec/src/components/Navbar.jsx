import { Link } from 'react-router-dom';
import { useAuth } from '../context/Auth.Context';

function Navbar(){
    const { state, logout } = useAuth()

    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">

                <Link className="navbar-brand" to='/inicio'>IntraTec</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/inicio'>Inicio</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/clientes'>clientes</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/servicios'>servicios</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to='/perfil' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {state.user.email}
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#">Ver perfil</Link></li>
                        <li><Link className="dropdown-item" to="#">Editar</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><button className="dropdown-item" onClick={() => logout()}>Cerrar Session</button></li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;