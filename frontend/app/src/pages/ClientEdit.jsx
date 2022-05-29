import { ClientsProvider } from '../context/Clients.Context';
import ClientEditForm from '../components/client/ClientEditForm'
import { useParams } from 'react-router-dom';

function ClientEdit() {
    const { id } = useParams();
    return (
        <ClientsProvider>
            <ClientEditForm  id={id} />
        </ClientsProvider>
    )
}

export default ClientEdit