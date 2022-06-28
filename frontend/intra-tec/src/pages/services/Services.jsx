import { useEffect, useState } from 'react';
import { useService } from '../../context/Service.Context';
import ServiceList from '../../components/service/ServiceList';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import RoleAdmin from '../../components/authRole/RoleAdmin';

//import Loading from '../../components/Loading';


function Services(){

    const {findService } = useService()
    const [loading, setLoading] = useState(true)
    
    useEffect(  () => {
             findService()
             .then(() => setLoading(false))
        }, [] )

    return(
        <div>
            <div className="row justify-content-between align-items-center">
                <div className="col-12 col-sm-auto my-5">
                    <h2>Servicios</h2>
                </div>
                <div className="col-12 col-sm-auto mb-5">
                <RoleAdmin>
                    <Link to='/servicios/nuevo' className="btn-add d-flex justify-content-center align-items-center">
                        <span className="icon-agregar me-2"></span>
                        Añadir servicio
                    </Link>
                </RoleAdmin>
                </div>
            </div>
            {loading ? <Loading /> : <ServiceList />}
        </div>
    )
}
export default Services;
