import { ClientsProvider } from '../context/Clients.Context';
import ClientCreateForm from '../components/client/ClientCreateForm'

function ClientCreate() {

    return (
        <ClientsProvider>
            <ClientCreateForm />
        </ClientsProvider>
    )
}

export default ClientCreate