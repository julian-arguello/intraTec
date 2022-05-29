
import { ServicesProvider } from '../context/Services.Context';
import ServiceCreateForm from '../components/service-client/ServiceCreateForm'
import { useParams } from 'react-router-dom';


function ClientCreate() {
    const { id } = useParams();
    return (

        
        <ServicesProvider>
            <ServiceCreateForm id={id}/>
        </ServicesProvider>
        
    )
}

export default ClientCreate