function Profile(props){

    return(
        <div className="container pt-4">
            <h2>Perfil de Técnico</h2>
            <div className="d-flex justify-content-end pb-4">
                <button className="btn btn-success mx-2" to="#">Cargar nuevo servic</button>
                <button className="btn btn-primary mx-2" to="#">Editar perfil</button>
            </div>           
                           
            <div className="row">
                <div className="pt-4 pb-4">
                    <h3>Información del Técnico</h3>
                    <ul className="list-unstyled d-xs-inline d-md-flex justify-content-between pt-2">
                        <li>
                            <p className="text-dark badge p-0">Técnico a cargo</p>
                            <br />
                            <ul className="list-unstyled">
                                <li>Nombre del tecnico</li>
                                <li>role_name</li>
                                <li>Email</li>
                            </ul>
                        </li>

                        <br className="p-1 d-md-none" />

                        <li>
                            <p className=" text-dark badge p-0 ">Estado</p>
                            <br />
                            <p>ACTIVE</p>
                        </li>

                        <br className="p-1 d-md-none" />
                        
                        <li>
                            <p className=" text-dark badge p-0">Cantidad de equipos recepcionados</p>
                            <br />
                            <p className="text-center p-2 rounded-2 bg-info text-white h3">244</p>
                        </li>
                        <li>
                            <p className=" text-dark badge p-0">Cantidad de equipos reparados</p>
                            <br />
                            <p className="text-center p-2 rounded-2 bg-success text-white h3">134</p>
                        </li>
                    </ul>
                </div>

                <hr />

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
                                    <button className="btn btn-info text-white">Ver</button>                                    
                                </td>
                            </tr>
                            <tr>
                                <td>2022-03-01</td>
                                <td>Pepsi Co</td>                                
                                <td>abc123asd456</td>
                                <td>Revisado</td>
                                <td>
                                    <button className="btn btn-info text-white">Ver</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2022-01-27</td>
                                <td>Brahma</td>                                
                                <td>asr456asd456</td>
                                <td>Reparado</td>
                                <td>
                                    <button className="btn btn-info text-white">Ver</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Profile;