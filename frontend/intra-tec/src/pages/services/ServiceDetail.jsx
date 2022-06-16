import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useService } from "../../context/Service.Context"
import stateClass from '../../service/service.state';
import imagenes from '../../assets/images';

export function ServiceDetail(){

    const { state, findServiceId } = useService()
    let classState = "card-header alert m-0 "
    const {id} = useParams();


    useEffect(() => {
        findServiceId(id)
        console.log("findServiceId state ->", state)
    }, [])

    return( 
        
      
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-5 px-md-5">
          <div>
            <div className="card h-100 bg-black text-white border-0">
              <div className={classState + stateClass(state.service.state)}>
                <small className="text-muted"><strong>Estado: {state.service.state}</strong></small>
              </div>
              <div className="card-body">
                <h5 className="card-title">Modelo: {state.service.model}</h5>
                <ul>
                  <li>Marca: {state.service.brand}</li>
                  <li>Numero de serie: {state.service.serial_number}</li>
                  <li>Ingreso : {state.service.create_at}</li>
                  <li>Detalle : {state.service.description}</li>
                </ul>
              </div>
              <div className="card-footer btn-group py-4">
                  <button type="button" className="btn btn-outline-success text-white">
                    <img src={ imagenes.editar } alt="ver detalle" className='btn-icon me-2'/>Editar
                  </button>
                  <button type="button" className="btn btn-outline-danger text-white">
                    <img src={ imagenes.borrar } alt="ver detalle" className='btn-icon me-2'/>Borrar
                  </button>
              </div>
            </div>
          </div>
        </div>


    )



        
}

export default ServiceDetail