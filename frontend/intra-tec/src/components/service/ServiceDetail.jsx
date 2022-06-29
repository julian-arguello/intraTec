import {stateClass, stateIcon} from '../../services/service.state';
import { Link } from 'react-router-dom';
import { ModalDeleteButton } from './ModalDeleate/ModalDeleateButton';
import { ModalDelete } from './ModalDeleate/ModalDelete';
import RoleAdmin from '../authRole/RoleAdmin';
import { formatRelative, subDays } from 'date-fns'
import { es } from 'date-fns/locale'

export function ServiceDetail(props){
    
    return(
     <div>
        <RoleAdmin>
            <ModalDeleteButton id={props.service._id} />
            <Link to={`/servicios/editar/${props.service._id}`} className="btn-add btn-edit d-flex justify-content-center align-items-center">
                <span class="icon-editar me-2"></span>Editar
            </Link>
        </RoleAdmin>
         <h2 className='my-5 text-center text-sm-start'>Detalle de servicio</h2>
         <ul className="row ps-0">
            <li className="col-12 col-sm-3 d-flex flex-column justify-content-between mb-5 mb-sm-0">
                <h3 className='h4 mb-3 text-center text-sm-start'>Técnico a cargo</h3>
                <div className='d-flex align-items-center justify-content-center justify-content-sm-start'>
                    <span class="icon-usuario_1 icon-perfil"></span>
                    <ul className='ps-2'>
                        <li>
                            <strong>{props.service.user.name}</strong>
                        </li>
                        <li>
                            <strong>{props.service.user.lastname}</strong>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="col-12 col-sm-4 d-flex flex-column justify-content-between mb-5 mb-sm-0">
                <h3 className='h4 mb-3 text-center text-sm-start'>Fecha recepción</h3>
                <p className='col-10 m-auto col-sm-8 m-sm-0 bg-black text-white px-3 py-4 rounded-4 text-center text-sm-start'>
                    {formatRelative(new Date(props.service.create_at), new Date(), { locale: es })}
                </p>
            </li>
            <li className="col col-md-3 d-flex flex-column justify-content-between">
                <h3 className='h4 mb-3 text-center text-sm-start'>Estado</h3>
                <p className={stateClass(props.service.state) + ' col-10 col-sm-8 m-auto m-sm-0 text-center text-white px-3 py-4 rounded-4'}>
                    {stateIcon(props.service.state)}
                </p>
            </li>
         </ul>
         <hr className='hr my-5' />
         <div className="row mb-5 gy-4 gy-sm-0">
            <li className="col-6 col-md-3 d-flex flex-column justify-content-between align-items-center align-items-sm-start">
                <h3 className='h4 mb-3'>Cliente</h3>
                <h4 className='mb-0'>{props.service.client.name_busines}</h4>
            </li>
            <li className="col-6 col-md-3 d-flex flex-column justify-content-between align-items-center align-items-sm-start">
                <h3 className='h4 mb-3'>Marca</h3>
                <p className='mb-0'>{props.service.brand}</p>
            </li>
            <li className="col-6 col-md-3 d-flex flex-column justify-content-between align-items-center align-items-sm-start">
                <h3 className='h4 mb-3'>Modelo</h3>
                <p className='mb-0'>{props.service.model}</p>
            </li>
            <li className="col-6 col-md-3 d-flex flex-column justify-content-between align-items-center align-items-sm-start">
                <h3 className='h4 mb-3'>N° de serie</h3>
                <p className='mb-0'>{props.service.serial_number}</p>
            </li>
         </div>
         <div className="row">
            <h3 className='h4 mb-4 text-center text-sm-start'>Descripción del inconveniente</h3>
            <div className='bg-light rounded-4 p-4'>
                <p className='mb-0 text-center text-sm-start'>"{props.service.description}"</p>
            </div>
         </div>
         <RoleAdmin>
            <ModalDelete id={props.service._id} />
         </RoleAdmin>
     </div>
    )
}
export default ServiceDetail