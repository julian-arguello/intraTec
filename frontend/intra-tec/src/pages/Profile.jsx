import { useAuth } from '../context/Auth.Context';
import authRole from '../services/auth.role';

function Profile(){

const { state } = useAuth();

    return(        
        <div>
            <h2 className='my-5 text-center text-sm-start'>Perfil de {authRole(state.user.role.role_name)}</h2>
            {/*<button className="btn btn-outline-primary" to="#">Editar perfil</button>*/}
            <ul className='p-4 card w-75 m-auto'>
                <li className='d-flex align-items-center mb-4'>
                    <span className='icon-profile icon-size-profile me-2'></span>
                    <div className='d-flex flex-column'>
                        <span>{state.user.name + " " + state.user.lastname}</span> 
                        <span>{state.user.role.role_name}</span>
                    </div>
                </li>
                <li className='d-flex align-items-center'>
                    <span className='icon-mail icon-size-profile me-2'></span>
                    {state.user.email}
                </li>
            </ul>
                        
        </div>

        /*{
                        <div className="d-md-flex justify-content-center justify-content-md-end">
                            <div className='me-4'>
                                <p className=" text-dark badge p-0">Cantidad de equipos recepcionados</p>
                                <br />
                                <p className="text-center p-2 text-white box-proceso rounded-4 border-0 h3">244</p>
                            </div>
                            <div className='me-4'>
                                <p className=" text-dark badge p-0">Cantidad de equipos reparados</p>
                                <br />
                                <p className="text-center p-2 rounded-4 text-white box-reparados rounded-2 border-0 h3">134</p>
                            </div>
                        </div>
        }*/

    )
}
export default Profile;