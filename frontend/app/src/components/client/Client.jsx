import { useEffect } from "react";
import { useClients } from '../../context/Clients.Context';
import { Link } from 'react-router-dom';



function Client(props) {

    const { getClientId, client } = useClients();
   

    useEffect(async () => {
        await getClientId(props.id)
    }, [])


    if (Object.keys(client).length === 0) {
        return (
            <div>
                <h2>Cargando..</h2>
            </div>
        )
    }

    return (

        <div >
            
            <h2>{client.name_busines}</h2> 
            <li><Link to={`/servicio/crear/${props.id}`}>Crear servicio *</Link></li>

            <ul>
                <li>{client.cuit_cuil}</li>
                <li>{client.phone}</li>
                <li>{client.email}</li>
                
                {client.services.length ? <li><ul>{
                    
                client.services.map(service =>{
                   
                    return <li key={service._id}>

                           
                            <ul className="card m-3">
                                <li>{service.model}</li>
                                <li>{service.brand}</li>
                                <li>{service.serial_number}</li>
                                <li>{service.description}</li>
                                <li>{service.state}</li>
                                <li>{service.create_at}</li>
                            </ul>
                            
                        

                        </li>
                })

                }</ul></li>: <li>Sin Servicios</li>}
                
                

            </ul>
        </div>

    )
}

export default Client