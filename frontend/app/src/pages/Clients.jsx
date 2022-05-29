import { ClientsProvider } from '../context/Clients.Context';
import ClientsList from '../components/client/ClientsList';
import { Link } from 'react-router-dom';

// page clients
function Clients() {

    
    return (
        <div>
            <h2>Clients</h2>

           <Link to="/cliente/crear-nuevo" className="btn btn-primary mb-5">Crear cliente</Link>

            <ClientsProvider>
                <ClientsList/>
            </ClientsProvider>

        </div>
    )
}
export default Clients;