import { Link } from 'react-router-dom'

function Sidebar(){

    return(
        <nav className='Sidebar'>
            <ul> 
                <li><Link to='/inicio'>Inicio</Link></li>
                <li><Link to='/clientes'>clientes</Link></li>
                <li><Link to='/servicios'>servicios</Link></li>
                <li><Link to='/perfil'>perfil</Link></li>
            </ul>
        </nav>
        
    );
}
export default Sidebar;