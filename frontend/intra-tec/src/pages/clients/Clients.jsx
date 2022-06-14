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
            <h2 className='h4 mb-5 ms-md-5 mt-5'>Clientes</h2>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-5 px-md-5">
                    {state.clients.map((client)=>(

                        <div key={client._id}>
                            <div className="card h-100 bg-black text-white border-0">
                                <div className="card-header alert m-0 alert-success">
                                <small className="text-muted"><strong> {client.name_busines}</strong></small>
                                </div>
                                <div className="card-body">
                                <ul>
                                    <li>cuit_cuil: {client.brand}</li>
                                    <li>Telefono: {client.phone}</li>
                                    <li>Email : {client.email}</li>
                                </ul>
                                </div>
                                <div className="card-footer btn-group py-4">
                                <button type="button" className="btn btn-outline-primary text-white">
                                    <img src={ imagenes.ver } alt="ver detalle" className='btn-icon me-2'/> Detalle
                                </button>
                                <button type="button" className="btn btn-outline-success text-white">
                                    <img src={ imagenes.editar } alt="ver detalle" className='btn-icon me-2'/>Editar
                                </button>
                                <button type="button" className="btn btn-outline-danger text-white">
                                    <img src={ imagenes.borrar } alt="ver detalle" className='btn-icon me-2'/>Borrar
                                </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}
export default Clients;