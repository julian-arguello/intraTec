import { useEffect } from 'react';
import { useService } from '../../context/Service.Context';
import ServiceList from '../../components/service/ServiceList';
//import Loading from '../../components/Loading';


function Services(props){
    const { state, findService } = useService()

    useEffect(  () => {
             findService();
        }, [] )

    return(
        <div>
            <h2>Servicios</h2>
            <ServiceList />
        </div>
    )
}
export default Services;