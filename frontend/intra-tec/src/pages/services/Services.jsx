import { useEffect } from 'react';
import { useService } from '../../context/Service.Context';
import ServiceList from '../../components/service/ServiceList';
import { Link } from 'react-router-dom';

//import Loading from '../../components/Loading';


function Services(props){
    const { findService } = useService()

    useEffect(  () => {
             findService();
        }, [] )

    return(
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='h4 mb-5 mt-5'>Servicios</h2>
                <Link to='/servicios/nuevo' className="btn-add d-flex align-items-center">
                    <span className="icon-agregar me-2"></span>
                    <span>Añadir servicio</span> 
                </Link>
            </div>
            <ServiceList />
        </div>
    )
}
export default Services;
