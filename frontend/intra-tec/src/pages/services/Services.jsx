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
            <div className="row justify-content-between align-items-center">
                <div className="col-12 col-sm-auto my-5">
                    <h2 className='h4'>Servicios</h2>
                </div>
                <div className="col-12 col-sm-auto mb-5">
                    <Link to='/servicios/nuevo' className="btn-add d-flex justify-content-center align-items-center">
                        <span className="icon-agregar me-2"></span>
                        Añadir servicio
                    </Link>
                </div>
            </div>
            <ServiceList />
        </div>
    )
}
export default Services;
