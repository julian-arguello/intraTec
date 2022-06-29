import imagenes from '../assets/images';

function Profile(props){
    return(        
        <div className="container">

            <div className=" d-flex justify-content-between align-items-center">
 
                <h2>Perfil de Técnico</h2>
                <button className="btn btn-outline-primary" to="#">Editar perfil</button>

            </div>           
                           
            <div className="row">
                <div className="pt-4 pb-4">
                    <h3>Información del Técnico</h3>
                    <ul className="list-unstyled d-xs-inline d-md-flex justify-content-between pt-2">
                        <li>
                            <p className="text-dark badge p-0">Técnico a cargo</p>
                            <br />
                            <ul className="list-unstyled">
                                <li>Alessandro Signorini</li>
                                <li>Superadmin</li>
                                <li>alessandro.signorini@davinci.edu.ar</li>
                            </ul>
                        </li>

                        <br className="p-1 d-md-none" />

                        {/* <li>
                            <p className=" text-dark badge p-0 ">Estado</p>
                            <br />
                            <p>Activo</p>
                        </li> */}

                        <br className="p-1 d-md-none" />

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
                    </ul>
                </div>
            </div>




        </div>
    )
}
export default Profile;