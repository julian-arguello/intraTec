import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useClient } from '../../context/Client.Context';
//import ServiceList from '../../components/service/ServiceList';

function Clients(props){

    const { state, findClient } = useClient()
    
    useEffect(  () => {
        findClient();
   }, [] )

    return(
        <div>
            <h2 className="m-3 text-center">Clientes</h2>
            <div className='p-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {console.log(state.clients)}
                    {state.clients.map((client)=>(

                        <div key={client._id} className="col" >
                        <div className="card h-100">
                            <div className="card-header alert m-0 alert-success">
                            <small className="text-muted"><strong>Cliente: {client.name_busines}</strong></small>
                            </div>
                            <div className="card-body">
                            <ul>
                                <li>cuit_cuil: {client.brand}</li>
                                <li>Telefono: {client.phone}</li>
                                <li>Email : {client.email}</li>
                               
                            </ul>
                            </div>
                            <div className="card-footer btn-group">
                                <button type="button" className="btn btn-outline-primary">Detalle</button>
                                <button type="button" className="btn btn-outline-primary">Editar</button>
                                <button type="button" className="btn btn-outline-primary">Borrar</button>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Clients;