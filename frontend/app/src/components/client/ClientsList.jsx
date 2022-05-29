import { useClients } from '../../context/Clients.Context';
import ClientItem from './ClientItem' 

function ClientsList() {
    const { clients } = useClients();

    return (
        <ul>
            { clients.map(client => (

                <ClientItem key={client._id} client={client} />

            )) }
        </ul>
    )
}

export default ClientsList;