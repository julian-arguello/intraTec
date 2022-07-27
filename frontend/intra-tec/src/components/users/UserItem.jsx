import authRole from "../../services/auth.role";
import UserEditForm from "./UserEditForm";
import { useState } from 'react';
export function UserItem(props){

    const [edit, setEdit] = useState(false)

    return(
            <div className="card-body mt-3 bg-black text-white p-1">

            {!edit ? 
                (<ul className='p-0 mb-3'>
                    <li className='d-flex align-items-center mb-1'>
                        Nombre: {props.user.name} {props.user.lastname}
                    </li>
                    <li className='d-flex align-items-center mb-1'>
                        <span>Email: {props.user.email}</span>
                    </li>
                    <li className='d-flex align-items-center mb-1'>
                        <span>Role: {authRole(props.user.role.role_name)}</span>
                    </li>
                    <li className='d-flex align-items-center mb-1'>
                        <span>Estado: {props.user.softDelete == "false" ? 'activo' : 'desactivado'}</span>
                    </li>
                </ul>) : <UserEditForm user={props.user}/>
            }
                <button className="btn btn-info" onClick={()=>(edit == false ? setEdit(true) : setEdit(false))}>{edit == false ? 'Editar' : 'Cancelar'}</button>

        </div>
    )
}
export default UserItem