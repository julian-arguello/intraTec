import { Link } from 'react-router-dom';

function PageNotFound(){
    
    return(
        <div className="container pt-4">
            <h2>Creo que te perdiste, esta página no existe</h2>
            <Link to='/inicio'>Volver al inicio</Link>
        </div>
    )
}
export default PageNotFound;