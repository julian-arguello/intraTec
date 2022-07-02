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
                <span class="icon-editar me-2"></span>Editar
            </Link>
        </RoleAdmin>

        <ul>
            <li><p>{ props.client.name_busines }</p></li>
            <li><p>{ props.client.cuit_cuil }</p></li>
            <li><p>{ props.client.phone }</p></li>
            <li><p>{ props.client.email }</p></li>
            
        </ul>

        <hr/>

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