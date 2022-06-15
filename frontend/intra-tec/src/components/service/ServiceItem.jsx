import { useService }  from '../../context/Service.Context';
import { Link } from 'react-router-dom';
import stateClass from '../../service/service.state';
import imagenes from '../../assets/images';


export function ServiceItem(){
    const { state } = useService()
    let classState = "card-header alert m-0 "
  
    return(
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-5 px-md-5">
          {state.services.map((service)=>(

            <div key={service._id}>
              <div className="card h-100 bg-black text-white border-0">
                <div className={classState + stateClass(service.state)}>
                  <small className="text-muted"><strong>Estado: {service.state}</strong></small>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Modelo: {service.model}</h5>
                  <ul>
                    <li>Marca: {service.brand}</li>
                    <li>Numero de serie: {service.serial_number}</li>
                    <li>Ingreso : {service.create_at}</li>
                  </ul>
                </div>
                <div className="card-footer btn-group py-4">
                    <Link to={`/servicios/${service._id}`} className="btn btn-outline-primary text-white">
                      <img src={ imagenes.ver } alt="ver detalle" className='btn-icon me-2'/> Detalle
                    </Link>
                    <button type="button" className="btn btn-outline-success text-white">
                      <img src={ imagenes.editar } alt="ver detalle" className='btn-icon me-2'/>Editar
                    </button>
                    <button type="button" className="btn btn-outline-danger text-white">
                      <img src={ imagenes.borrar } alt="ver detalle" className='btn-icon me-2'/>Borrar
                    </button>
                </div>
              </div>
            </div>
            
          ))}
          </div>
    );
}
export default ServiceItem