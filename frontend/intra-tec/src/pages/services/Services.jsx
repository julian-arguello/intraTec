import { useEffect, useState } from 'react';
import { useService } from '../../context/Service.Context';
import ServiceList from '../../components/service/ServiceList';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import RoleAdmin from '../../components/authRole/RoleAdmin';

function Services(){

    const {findService } = useService()
    const [loading, setLoading] = useState(true)
    
    useEffect(  () => {
        findService()
        .then(() => setLoading(false))
    }, [] )

    return(
        <main>
            <div className="row justify-content-between align-items-center mt-5 mt-sm-0">
                <div className="col-12 col-sm-auto my-5">
                    <h2 className='mt-5 mt-sm-0 text-center text-sm-start'>Servicios</h2>
                </div>
                <div className="col-12 col-sm-auto">
                <RoleAdmin>
                    <Link to='/servicios/nuevo' className="btn-add d-flex justify-content-center align-items-center">
                        <span className="icon-agregar me-2 f-20"></span>
                        Nuevo servicio
                    </Link>
                </RoleAdmin>
                </div>
            </div>
            {loading ? <Loading /> : <ServiceList />}
        </main>
    )
}
export default Services;
