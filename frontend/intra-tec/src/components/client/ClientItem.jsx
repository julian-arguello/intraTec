import { Link } from "react-router-dom";

export function ClientItems(props){

    return(
        <div key={props.client._id} className="col client-card">
            <div className="text-white bg-dark p-sm-3">
                <div className="card-body">
                    <h3 className='text-center h5 mb-5'>
                        <strong> {props.client.name_busines}</strong>
                    </h3>
                    <ul className='p-0 mb-5'>
                        <li className='d-flex justify-content-between mb-3'>
                            <span>CUIL</span>
                            <span>{props.client.cuit_cuil}</span> 
                        </li>
                        <li className='d-flex justify-content-between mb-3'>
                            <span>Telefono</span>
                            <span>{props.client.phone}</span>
                        </li>
                        <li className='d-flex justify-content-between'>
                            <span>Email</span>
                            <span>{props.client.email}</span>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-end">
                        <Link to={`/clientes/${props.client._id}`} className="box-proceso rounded-4 text-white d-flex align-items-center justify-content-center px-3 py-2">
                            <span className="icon-ver me-2"></span>Ver
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientItems;