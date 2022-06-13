import { Link } from 'react-router-dom';
import { useAuth } from '../context/Auth.Context';
import imagenes from '../assets/images';

function Navbar(){
    const { state, logout } = useAuth()
    const isMobile = window.innerWidth < 576;
    const menu = document.getElementById("mySidebar");
    let button = isMobile ? "&#9776;" : "&times;";
    
    return(
        <nav id='mySidebar' className={`${isMobile ? "sidebar closeSidebar" : "sidebar"}`}>
            <a href="#" id='closebtn' onClick={toggleMenu} dangerouslySetInnerHTML={{__html: button}}>
            </a>
            <ul className='p-0 d-flex flex-column justify-content-sm-between mb-0'>
                <li>
                    <div className='d-flex align-items-center mb-4 user'>
                        <div className='me-2'>
                            <img src={ imagenes.usuario} alt="usuario" className='logo-user'/>
                        </div>
                        <div className='ms-2 text-white'>
                            <h2 className='d-block mb-2 h6'>Nombre de usuario</h2>
                            <span className='d-block'>Rol de usuario</span>
                        </div>
                    </div>
                    <hr className='hr mb-4' />
                    <h3 className='h5 text-white mb-4'>General</h3>
                    <ul className='p-0'>
                        <li className='mb-3 d-flex align-items-center'>
                            <img src={ imagenes.tablero } alt="tablero" className='nav-icon me-3' />
                            <Link to='/inicio' onClick={toggleMenu}>Tablero principal</Link>
                        </li>
                        <li className='mb-3 d-flex align-items-center'>
                            <img src={ imagenes.servicio } alt="servicio" className='nav-icon me-3' />
                            <Link to='/servicios' onClick={toggleMenu}>Servicios</Link>
                        </li>
                        <li className='mb-3 d-flex align-items-center'>
                            <img src={ imagenes.cliente } alt="cliente" className='nav-icon me-3' />
                            <Link to='/clientes' onClick={toggleMenu}>Clientes</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <hr className='hr mb-4' />      
                    <ul className='p-0'>
                        <li className='mb-3 d-flex align-items-center'>
                            <img src={ imagenes.perfil } alt="ver perfil" className='nav-icon me-3' />
                            <Link to='/perfil' onClick={toggleMenu}>Ver perfil</Link>
                        </li>
                        <li className='mb-3 d-flex align-items-center'>
                            <img src={ imagenes.sesion } alt="cerrar sesion" className='nav-icon me-3' />
                         
                            <Link to='/' onClick={() => logout()}>Cerrar sesión</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

function toggleMenu() {
    let menu = document.getElementById("mySidebar");
    let main = document.getElementById("main");
    let actionBtn = document.getElementById("closebtn")
    if(!menu.classList.contains("closeSidebar")) {
        actionBtn.innerHTML = "&#9776;";
    } else {
        actionBtn.innerHTML = "&times;";
    }
    menu.classList.toggle("closeSidebar");
    main.classList.toggle("main-margin-close");
}

export default Navbar;