import { useService }  from '../../context/Service.Context';
import { Link } from 'react-router-dom';
import stateClass from '../../service/service.state';
import imagenes from '../../assets/images';


export function ServiceItem(){
    const { state } = useService()
  
    return(
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-5 px-md-5">
          {state.services.map((service)=>(

            <div key={service._id}>
              <div className="card text-white bg-dark m-2 p-4">
                <div className={stateClass(service.state) + ' p-4 text-center'}>
                  <small><strong>{service.state}</strong></small>
                </div>
                <div className="card-body">
                  <h5>Modelo: {service.model}</h5>
                  <ul className="p-0">
                    <li>Marca: {service.brand}</li>
                    <li>Numero de serie: {service.serial_number}</li>
                    <li>Ingreso : {service.create_at}</li>
                  </ul>
                </div>
                <div className="py-4 d-sm-flex justify-content-between">
                    <Link to={`/servicios/${service._id}`} className="box-proceso rounded-4 border-0 text-white d-flex align-items-center justify-content-center mb-2 p-2">
                      <img src={ imagenes.ver } alt="ver detalle" className='btn-icon me-2'/> <span className='text-center'>Detalle</span> 
                    </Link>
                    <a className="box-reparados rounded-4 border-0 text-white d-flex align-items-center justify-content-center mb-2 p-2">
                      <img src={ imagenes.editar } alt="editar" className='btn-icon me-2'/> <span>Editar</span> 
                    </a>
                    <a className="sinreparacion rounded-4 border-0 text-white d-flex align-items-center justify-content-center mb-2 p-2">
                      <img src={ imagenes.borrar } alt="eliminar" className='btn-icon me-2'/>Borrar
                    </a>
                </div>
              </div>
            </div>
            
          ))}
          </div>
    );
}
export default ServiceItem