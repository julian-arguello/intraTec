
import { Link } from 'react-router-dom';
import stateClass from '../../services/service.state';
import imagenes from '../../assets/images';

/**
 * Card de servicio.
 * 
 * @param {objeto de tipo servicio} props 
 * @returns 
 */
export function ServiceItem(props){
    
    return(
            <div>
              <div className="card text-white bg-dark m-2 p-4">
                <div className={stateClass(props.service.state) + ' p-4 text-center'}>
                  <small><strong>{props.service.state}</strong></small>
                </div>
                <div className="card-body">
                  <h5>Modelo: {props.service.model}</h5>
                  <ul className="p-0">
                    <li>Marca: {props.service.brand}</li>
                    <li>Numero de serie: {props.service.serial_number}</li>
                    <li>Ingreso : {props.service.create_at}</li>
                  </ul>
                </div>
                <div className="py-4 d-sm-flex justify-content-between">
                    <Link to={`/servicios/${props.service._id}`} className="box-proceso rounded-4 border-0 text-white d-flex align-items-center justify-content-center mb-2 p-2">
                      <img src={ imagenes.ver } alt="ver detalle" className='btn-icon me-2'/> <span className='text-center'>Detalle</span> 
                    </Link>
                </div>
              </div>
            </div>  
    );
}
export default ServiceItem;