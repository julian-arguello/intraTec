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
                <h2 className='h4 mb-5 ms-md-5 mt-5'>Clientes</h2>
                <Link to={'#'} className="btn btn-outline-primary">Añadir cliente</Link>
            </div>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-5 px-md-5">
                    {state.clients.map((client)=>(

                        <div key={client._id}>
                            <div className="card text-white bg-dark m-2 p-4">
                                <div className='text-center'>
                                <small><strong> {client.name_busines}</strong></small>
                                </div>
                                <div className="card-body">
                                <ul className='p-0 mb-2'>
                                    <li>cuit_cuil: {client.brand}</li>
                                    <li>Telefono: {client.phone}</li>
                                    <li>Email : {client.email}</li>
                                </ul>
                                </div>
                                <div className="py-4 d-sm-flex justify-content-between">
                                    <a className="box-proceso rounded-4 border-0 text-white d-flex align-items-center justify-content-center mb-2 p-2">
                                        <img src={ imagenes.ver } alt="ver detalle" className='btn-icon me-2'/> Detalle
                                    </a>
                                    <a className="box-reparados rounded-4 border-0 text-white d-flex align-items-center justify-content-center mb-2 p-2">
                                        <img src={ imagenes.editar } alt="ver detalle" className='btn-icon me-2'/>Editar
                                    </a>
                                    <a className="sinreparacion rounded-4 border-0 text-white d-flex align-items-center justify-content-center mb-2 p-2">
                                        <img src={ imagenes.borrar } alt="ver detalle" className='btn-icon me-2'/>Borrar
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}
export default Clients;