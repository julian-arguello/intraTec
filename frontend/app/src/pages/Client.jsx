import { useParams } from 'react-router-dom';
import { ClientsProvider } from '../context/Clients.Context';
import Client from '../components/client/Client';



function ClientPage() {
    const { id } = useParams();

    return (


        <ClientsProvider>
       
                <Client id={id} />
           
        </ClientsProvider>

    )
}
export default ClientPage;