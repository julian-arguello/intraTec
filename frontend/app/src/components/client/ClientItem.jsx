import { Link } from 'react-router-dom';
import { useClients } from '../../context/Clients.Context';
import {useAuth} from '../../context/Auth.Context'

function ClientsListItem(props) {
   
    const { remove } = useClients();
    const { isAdmin } = useAuth();
  
    const handleRemove = () => {
        console.log('handleRemove',props.client)
        remove(props.client)
    }



    return (
        <li>
            <Link to={`/cliente/${props.client._id}`}>{props.client.name_busines}</Link>
            {isAdmin() ? <button onClick={() => handleRemove() }>Eliminar</button> : ""}
            {isAdmin() ? <Link to={`/cliente/editar/${props.client._id}`}>Editar</Link> : ""}
        </li>
    )
}

export default ClientsListItem;
