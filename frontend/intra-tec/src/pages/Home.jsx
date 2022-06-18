import { useService }  from '../context/Service.Context';
import { Link } from 'react-router-dom';
import stateClass from '../service/service.state';
import imagenes from '../assets/images';
import { Link } from 'react-router-dom';

function Home(props){

    return(
        <div className="container">
            <Link to='/servicios/nuevo'><p>Nuevo Servicios</p></Link>
            <h2 className="d-none" >Home</h2>

            <div className="row text-white d-xs-inline d-sm-flex 
                            justify-content-between align-items-center text-center text-sm-start">
                
                <div className="box-recepcionados p-3 m-1 rounded-4 col-5 col-lg-2 size-box-stadistics">
                    <div  className="d-flex align-items-center">
                        <p className="h3"><strong>10</strong></p>
                        <img src={ imagenes.recepcionado } alt="recepcion-logo" className="mx-auto h-100"/>
                    </div>
                    <p className="m-0"><strong>Recepcionados</strong></p>
                </div>
                <div className="box-proceso p-3 m-1 rounded-4 col-5 col-lg-2 size-box-stadistics">
                    <div  className="d-flex align-items-center">
                        <p className="h3"><strong>10</strong></p>
                        <img src={ imagenes.proceso } alt="enproceso-logo" className="mx-auto h-100"/>
                    </div>
                    <p className="m-0"><strong>En Proceso</strong></p>
                </div>
                <div className="box-reparados p-3 m-1 rounded-4 col-5 col-lg-2 size-box-stadistics">
                    <div  className="d-flex align-items-center">
                        <p className="h3"><strong>10</strong></p>
                        <img src={ imagenes.reparado } alt="reparados-logo" className="mx-auto h-100"/>
                    </div>
                    <p className="m-0"><strong>Reparados</strong></p>
                </div>
                <div className="box-sinreparacion p-3 m-1 rounded-4 col-5 col-lg-2 size-box-stadistics">
                    <div className="d-flex align-items-center">
                        <p className="h3"><strong>10</strong></p>
                        <img src={ imagenes.sinreparar } alt="sinreparacion-logo" className="mx-auto h-100"/>
                    </div>
                    <p className="m-0"><strong>Sin Reparación </strong></p>
                </div>
            </div>

            <hr />


            <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-5 px-md-5">

                <div className="card h-100 bg-black text-white border-0">

                    <div >
                        <div className="w-50">
                        <div className="pb-4 py-2">
                                <small className="text-white-50 w-50"><strong>Ingresó</strong></small>
                            </div>
                        </div>
                        <div className="w-50">
                            <div className="pb-4 py-2">
                                <small className="text-white-50 w-50"><strong>Ingresó</strong></small>
                            </div>
                            <div className="w-100 d-flex">                        
                                <img src={ imagenes.recepcionado } alt="recepcion-logo" className="h-100 mx-3" />
                                <h5 className="card-title">Nombre del tecnico </h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-100 d-flex pt-4'>
                        <img src={ imagenes.recepcionado } alt="recepcion-logo" className="h-100 mx-3" />
                        <p><strong> nombre de equipoooooooooooooooo</strong></p>
                    </div>
                    <div className="card-footer pb-3 d-flex ">
                        <p className="text-white fw-light small w-75">Fecha</p>
                        <button className="box-proceso rounded-5 text-white p-2 px-3 me-2 m-auto">
                            <img src={ imagenes.ver } alt="ver detalle" className='btn-icon mx-1'/> Ver
                        </button>
                    </div>
                </div>
            </div>

            <div className="pt-4 pb-4 d-flex flex-wrap">
                <h3 className="col-12 text-center text-md-start">Servicios más recientes</h3>   

                <div className="d-xs-inline d-sm-flex align-items-center col-12 col-md-6 col-xl-4">              
                
                    <div className="card card-body text-white bg-dark m-2">

                        <div className="d-flex justify-content-between ">
                            <p className="card-subtitle fw-light">Cliente:</p>
                            <p className="card-title h5">Quilmes</p>  
                        </div>                            
                        <div className="d-flex justify-content-between">
                            <p className="text-white fw-light">Equipo Ingresado: </p>                                
                            <p className="text-white fw-semibold"> XMZ-H30000</p>
                        </div>

                        <hr className="m-0 mb-2" />

                        <div className="d-flex justify-content-between">                     
                            <div>                                    
                                <p className="card-title h5 m-0">
                                    <span className="card-subtitle mb-2 fw-light badge p-0">Ingreso: </span> Nombre del técnico.
                                </p> 
                                <p className="text-white fw-light badge p-0 m-0">Fecha</p> 
                            </div>
                            <button href="#" className="text-white box-proceso rounded-4 border-0 m-2">
                                <img src={ imagenes.ver } alt="ver-card" className='m-1' />
                                <strong>Ver</strong>
                            </button>
                        </div>
                    </div>

                </div>

                <div className="d-xs-inline d-sm-flex  align-items-center col-12 col-md-6 col-xl-4">                
                
                    <div className="card card-body text-white bg-dark m-2">

                        <div className="d-flex justify-content-between ">
                            <p className="card-subtitle fw-light">Cliente:</p>
                            <p className="card-title h5">Quilmes</p>  
                        </div>                            
                        <div className="d-flex justify-content-between">
                            <p className="text-white fw-light">Equipo Ingresado: </p>                                
                            <p className="text-white fw-semibold"> XMZ-H30000</p>
                        </div>

                        <hr className="m-0 mb-2" />

                        <div className="d-flex justify-content-between">                     
                            <div>                                    
                                <p className="card-title h5 m-0">
                                    <span className="card-subtitle mb-2 fw-light badge p-0">Ingreso: </span> Nombre del técnico.
                                </p> 
                                <p className="text-white fw-light badge p-0 m-0">Fecha</p> 
                            </div>
                            <button href="#" className="text-white box-proceso rounded-4 border-0 m-2">
                                <img src={ imagenes.ver } alt="ver-card" className='m-1' />
                                <strong>Ver</strong>
                                </button>
                        </div>
                    </div>

                </div>

                <div className="d-xs-inline d-sm-flex  align-items-center col-12 col-md-6 col-xl-4">                
                
                    <div className="card card-body text-white bg-dark m-2">

                        <div className="d-flex justify-content-between ">
                            <p className="card-subtitle fw-light">Cliente:</p>
                            <p className="card-title h5">Quilmes</p>  
                        </div>                            
                        <div className="d-flex justify-content-between">
                            <p className="text-white fw-light">Equipo Ingresado: </p>                                
                            <p className="text-white fw-semibold"> XMZ-H30000</p>
                        </div>

                        <hr className="m-0 mb-2" />

                        <div className="d-flex justify-content-between">                     
                            <div>                                    
                                <p className="card-title h5 m-0">
                                    <span className="card-subtitle mb-2 fw-light badge p-0">Ingreso: </span> Nombre del técnico.
                                </p> 
                                <p className="text-white fw-light badge p-0 m-0">Fecha</p> 
                            </div>
                            <button href="#" className="text-white box-proceso rounded-4 border-0 m-2">
                                <img src={ imagenes.ver } alt="ver-card" className='m-1' />
                                <strong>Ver</strong>
                                </button>
                        </div>
                    </div>
                </div>

        </div>
    </div>
    )
}
export default Home;