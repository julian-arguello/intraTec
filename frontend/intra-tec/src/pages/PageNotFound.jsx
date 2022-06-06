import { Link } from 'react-router-dom';

function PageNotFound(){
    
    return(
        <div>
            <h2>Creo que te perdiste, esta pagina no existe</h2>
            <Link to='/inicio'>Volver al inicio</Link>
        </div>
    )
}
export default PageNotFound;