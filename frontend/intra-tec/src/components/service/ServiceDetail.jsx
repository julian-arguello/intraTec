import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useService } from "../../context/Service.Context"
import stateClass from '../../services/service.state';
import imagenes from '../../assets/images';
import { Link } from 'react-router-dom';
import { ModalDeleteButton } from './../ModalDeleate/ModalDeleateButton';
import { ModalDelete } from './../ModalDeleate/ModalDelete';


export function ServiceDetail(){
    
    let classState = "card-header alert m-0 "
    const { state, findServiceId } = useService()
    const {id} = useParams()

    useEffect(() => {
        findServiceId(id)
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

                        <Link to={`/servicios/editar/${state.service._id}`} className="box-proceso rounded-4 border-0 text-white d-flex align-items-center justify-content-center mb-2 p-2">
                            <img src={ imagenes.editar } alt="editar" className='btn-icon me-2'/> <span className='text-center'>Editar</span> 
                        </Link>

                        
                        <ModalDeleteButton id={state.service._id} />
                        
                    </div>
                </div>
                <ModalDelete id={state.service._id} />
            </div>
        </div>
    )
}
export default ServiceDetail