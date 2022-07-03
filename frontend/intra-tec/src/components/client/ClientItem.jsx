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
                        <li className='d-flex align-items-center mb-3'>
                            <span className="icon-cuil icon-card me-3"></span>
                            <span>{props.client.cuit_cuil}</span> 
                        </li>
                        <li className='d-flex align-items-center mb-3'>
                            <span className="icon-phone icon-card me-3"></span>
                            <span>{props.client.phone}</span>
                        </li>
                        <li className='d-flex align-items-center'>
                            <span className="icon-mail me-3"></span>
                            <span>{props.client.email}</span>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-end">
                        <Link to={`/clientes/${props.client._id}`} className="box-proceso rounded-4 text-white d-flex align-items-center justify-content-center px-3 py-2">
                            <span className="icon-eye me-2"></span>Ver
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientItems;