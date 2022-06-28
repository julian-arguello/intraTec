import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useClient } from '../../context/Client.Context';
//import ServiceList from '../../components/service/ServiceList';
import imagenes from '../../assets/images';

function Clients(props){

    const { state, findClient } = useClient()
    
    useEffect(  () => {
        findClient();
   }, [] )

    return(
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="col-12 col-sm-auto my-5">
                    <h2>Clientes</h2>
                </div>
                <div className="col-12 col-sm-auto mb-5">
                    <Link to={'#'} className="btn-add d-flex justify-content-center align-items-center">
                        <span className="icon-agregar me-2"></span>
                        Añadir cliente
                    </Link>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-5 gx-0 gx-sm-3">
                {state.clients.map((client)=>(
                    <div key={client._id} className="col client-card">
                        <div className="text-white bg-dark p-sm-3">
                            <div className="card-body">
                                <h3 className='text-center h5 mb-5'>
                                    <strong> {client.name_busines}</strong>
                                </h3>
                                <ul className='p-0 mb-5'>
                                    <li className='d-flex justify-content-between mb-3'>
                                        <span>CUIL</span>
                                        <span>{client.cuit_cuil}</span> 
                                    </li>
                                    <li className='d-flex justify-content-between mb-3'>
                                        <span>Telefono</span>
                                        <span>{client.phone}</span>
                                    </li>
                                    <li className='d-flex justify-content-between'>
                                        <span>Email</span>
                                        <span>{client.email}</span>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-end">
                                    <Link to={`#`} className="box-proceso rounded-4 text-white d-flex align-items-center justify-content-center px-3 py-2">
                                        <span className="icon-ver me-2"></span>Ver
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Clients;