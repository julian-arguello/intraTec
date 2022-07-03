import { Link } from 'react-router-dom';
import { ModalDeleteButton } from './ModalDeleate/ModalDeleateButton';
import { ModalDelete } from './ModalDeleate/ModalDelete';
import ServiceItem from '../service/ServiceItem';
import RoleAdmin from '../authRole/RoleAdmin';
import RoleSuperAdmin from '../authRole/RoleSuperAdmin'


export function ClientDetail(props){
    
    return(
     <div>
        <RoleAdmin>
            <RoleSuperAdmin>
                <ModalDeleteButton id={props.client._id} />
            </RoleSuperAdmin>
            <Link to={`/clientes/editar/${props.client._id}`} className="btn-add btn-edit d-flex justify-content-center align-items-center">
                <span className="icon-edit me-2"></span>Editar
            </Link>
        </RoleAdmin>
        <div className="d-flex align-items-center justify-content-between">
            <h2 className='my-5 text-center text-sm-start'>Detalle de { props.client.name_busines }</h2>
            <Link to={`/clientes`} className="btn-back position-details-back text-center">
                <span className="icon-back me-2"></span>Atrás
            </Link>
        </div>
        <ul className='mb-5'>
            <li className='d-flex align-items-center mb-4'>
                <span className='icon-cuil me-3 icon-card'></span>
                <p className='mb-0'>{ props.client.cuit_cuil }</p>
            </li>
            <li className='d-flex align-items-center mb-4'>
                <span className='icon-phone me-3 icon-card'></span>
                <p className='mb-0'>{ props.client.phone }</p>
            </li>
            <li className='d-flex align-items-center'>
                <span className='me-3 icon-card icon-mail'></span>
                <p className='mb-0'>{ props.client.email }</p>
            </li>
        </ul>

        <hr className='hr'/>

        <h3 className='my-5'>Servicios asociados</h3>

        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 gy-5 gx-0 gx-sm-5">
            {(props.client.services.length == 0) && <p>Aún no tienes servicios asosciados</p>}
            {props.client.services.map((service)=>(
                <ServiceItem key={service._id} service={service} clientDetail={true}/>
            ))}
        </div>
       


         <RoleAdmin>
            <ModalDelete id={props.client._id} />
         </RoleAdmin>
     </div>
    )
}
export default ClientDetail