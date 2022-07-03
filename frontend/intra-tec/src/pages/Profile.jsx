import { useAuth } from '../context/Auth.Context';
import authRole from '../services/auth.role';

function Profile(){

const { state } = useAuth();

    return(        
        <div className="container">

            <div className=" d-flex justify-content-between align-items-center">
 
                <h2>Perfil de {authRole(state.user.role.role_name)}</h2>
                {/*<button className="btn btn-outline-primary" to="#">Editar perfil</button>*/}

            </div>           
                           
            <div className="row">
                <div className="pt-4 pb-4">
                    
                    <div className="list-unstyled d-xs-inline d-md-flex justify-content-between pt-2">
                        
                            <ul className="list-unstyled">
                                <li>Nombre: {state.user.name + " " + state.user.lastname}</li>
                                <li>Rol: {state.user.role.role_name}</li>
                                <li>Email: {state.user.email}</li>
                            </ul>
                        

                        <br className="p-1 d-md-none" />

                       
                        <br className="p-1 d-md-none" />
        {/*
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
        */}
                    </div>
                </div>
            </div>




        </div>
    )
}
export default Profile;