
import  ServiceItem from './ServiceItem';
import { useService }  from '../../context/Service.Context';

/**
 * Lista de servicios.
 */
export function ServiceList(){

    const { state } = useService()

    return(    
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 gy-5 gx-0 gx-sm-5 px-md-5">
            {state.services.reverse().map((service)=>(
                <ServiceItem key={service._id} service={service}/>
            ))}
        </div>
    );
}
export default ServiceList;