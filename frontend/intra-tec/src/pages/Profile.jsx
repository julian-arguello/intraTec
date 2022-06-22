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

                {/* <hr />

                <div className="table-responsive pt-4 pb-4">
                    <h4 className="pb-2">Historial</h4>

                    <table className="table align-middle table-dark table-hover">
                        <thead>
                            <tr>                    
                                <th scope="col">Fecha de recepción</th>
                                <th scope="col">Cliente</th>                                
                                <th scope="col">Numero de serie</th>
                                <th scope="col">Estado</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>2022-04-03</td>
                                <td>Quilmes</td>                                
                                <td>asd456asd456</td>
                                <td>En Reparación</td>
                                <td>
                                    <button href="#" className="text-white box-proceso rounded-4 border-0 m-2">
                                        <img src={ imagenes.ver } alt="ver-card" className='m-1' />
                                        <strong>Ver</strong>
                                    </button>                                  
                                </td>
                            </tr>
                            <tr>
                                <td>2022-03-01</td>
                                <td>Pepsi Co</td>                                
                                <td>abc123asd456</td>
                                <td>Revisado</td>
                                <td>
                                    <button href="#" className="text-white box-proceso rounded-4 border-0 m-2">
                                        <img src={ imagenes.ver } alt="ver-card" className='m-1' />
                                        <strong>Ver</strong>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2022-01-27</td>
                                <td>Brahma</td>                                
                                <td>asr456asd456</td>
                                <td>Reparado</td>
                                <td>
                                    <button href="#" className="text-white box-proceso rounded-4 border-0 m-2">
                                        <img src={ imagenes.ver } alt="ver-card" className='m-1' />
                                        <strong>Ver</strong>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
            </div>




        </div>
    )
}
export default Profile;