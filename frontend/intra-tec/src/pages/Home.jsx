import { useEffect, useState } from 'react';
import { useService } from '../context/Service.Context';
import { Link } from 'react-router-dom';
import HomeStatistics from '../components/home/HomeStatistics';
import HomeListServiceRecent from '../components/home/HomeListServiceRecent';
import Loading from '../components/Loading';
import RoleAdmin from '../components/authRole/RoleAdmin';

import { useNotify } from '../context/Notify.Context';
// import imagenes from '../assets/images';


function Home(){

    const {findServiceRecent, findStatistics } = useService()
    const [loadingStatistics, setloadingStatistics] = useState(true)
    const [loadingServiceRecent, setLoadingServiceRecent] = useState(true)

    const{ notify } = useNotify() 

    useEffect(  () => {
        findServiceRecent()
        .then(() => setLoadingServiceRecent(false))
        findStatistics()
        .then(() => setloadingStatistics(false))

   }, [] )

    return(
        <div className="container">
            
            <h2 className="d-none">Home</h2> {/*????*/}


            <RoleAdmin>
                <Link className='btn btn-primary' to='/servicios/nuevo' >nuevo servicio</Link>
            </RoleAdmin>
            
            {loadingStatistics ? <Loading/> : <HomeStatistics />}

            <hr />

            <button onClick={()=>(notify({msj: 'hola'}))}>notificar</button>
            <hr />
            <button onClick={()=>(notify({}))}>Limpiar</button>
            <hr />


            <hr />

            {loadingServiceRecent ? <Loading/> : <HomeListServiceRecent />}

        </div>
    )
}
export default Home;