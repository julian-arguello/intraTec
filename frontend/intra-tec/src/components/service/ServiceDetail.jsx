
import stateClass from '../../services/service.state';
import imagenes from '../../assets/images';
import { Link } from 'react-router-dom';
import { ModalDeleteButton } from './ModalDeleate/ModalDeleateButton';
import { ModalDelete } from './ModalDeleate/ModalDelete';
import RoleAdmin from '../authRole/RoleAdmin';


export function ServiceDetail(props){
    
    let classState = "card-header alert m-0 "
        console.log("props.service -> ", props.service)
    return(
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-5 px-md-5">
            <div>
                <div className="card h-100 bg-black text-white border-0">
                    <div className={classState + stateClass(props.service.state)}>
                        <small className="text-muted"><strong>Estado: {props.service.state}</strong></small>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Modelo: {props.service.model}</h5>
                        <ul>
                            <li>Marca: {props.service.brand}</li>
                            <li>Numero de serie: {props.service.serial_number}</li>
                            <li>Ingreso : {props.service.create_at}</li>
                            <li>Detalle : {props.service.description}</li>
                        </ul>

                      

                       <p>Usuario</p>
                        <ul>
                            <li>nombre: {props.service.user.name}</li>
                            <li>apellido: {props.service.user.lastname}</li>
                            <li>email: {props.service.user.email}</li>
                            <li>rol: {props.service.user.role.role_name}</li>
                        </ul>

                        <p>cliente</p>
                        <ul>
                            <li>cuit_cuil: {props.service.client.cuit_cuil}</li>
                            <li>email: {props.service.client.email}</li>
                            <li>name_busines: {props.service.client.name_busines}</li>
                            <li>phone: {props.service.client.phone}</li>
                            
                        </ul>

                    </div>
                    <div className="card-footer btn-group py-4">

                        <RoleAdmin>
                            <Link to={`/servicios/editar/${props.service._id}`} className="box-proceso rounded-4 border-0 text-white d-flex align-items-center justify-content-center mb-2 p-2">
                                <img src={ imagenes.editar } alt="editar" className='btn-icon me-2'/> <span className='text-center'>Editar</span> 
                            </Link>
                            
                            <ModalDeleteButton id={props.service._id} />
                        </RoleAdmin>
                        
                    </div>
                </div>
                <RoleAdmin>
                    <ModalDelete id={props.service._id} />
                </RoleAdmin>
            </div>
        </div>
    )
}
export default ServiceDetail