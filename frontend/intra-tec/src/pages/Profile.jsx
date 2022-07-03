import { useAuth } from '../context/Auth.Context';
import authRole from '../services/auth.role';

function Profile(){

const { state } = useAuth();

    return(        
        <div>
            <h2 className='my-5 text-center text-sm-start'>Perfil de {authRole(state.user.role.role_name)}</h2>
            {/*<button className="btn btn-outline-primary" to="#">Editar perfil</button>*/}
            <ul className='row ps-0'>
                <li className="col-12 col-sm-3 d-flex flex-column justify-content-between mb-5 mb-sm-0">
                    <h3 className='h4 mb-3 text-center text-sm-start'>Nombre</h3>
                    <div className='d-flex align-items-center justify-content-center justify-content-sm-start'>
                        <span className='icon-profile icon-card me-2'></span>
                        <span>{state.user.name + " " + state.user.lastname}</span> 
                    </div>
                </li>
                <li className="col-12 col-sm-3 d-flex flex-column justify-content-between mb-5 mb-sm-0">
                    <h3 className='h4 mb-3 text-center text-sm-start'>Rol</h3>
                    <div className='d-flex align-items-center justify-content-center justify-content-sm-start'>
                        <span className='icon-profile icon-card text-primary me-2'></span>
                        <span>{state.user.role.role_name}</span>
                    </div>
                </li>
                <li className="col-12 col-sm-3 d-flex flex-column justify-content-between mb-5 mb-sm-0">
                    <h3 className='h4 mb-3 text-center text-sm-start'>Correo</h3>
                    <div className='d-flex align-items-center justify-content-center justify-content-sm-start'>
                        <span className='icon-mail f-35 me-2'></span>
                        <span>{state.user.email}</span>
                    </div>
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