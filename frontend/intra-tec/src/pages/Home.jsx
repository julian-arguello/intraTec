
import imagenes from '../assets/images';

function Home(props){

    return(
        <div className="container">
            <h2 className="d-none">Home</h2>

            <div className="row text-white d-xs-inline d-sm-flex justify-content-between align-items-center text-center text-sm-start">
                
                <div className="box-recepcionados p-3 m-1 rounded-4 col-5 col-lg-2 size-box-stadistics">
                    <div  className="d-flex align-items-center">
                        <p className="h3"><strong>10</strong></p>
                        <img src={ imagenes.recepcionado } alt="recepcion-logo" className="stadistic h-100"/>
                    </div>
                    <p className="m-0"><strong>Recepcionados</strong></p>
                </div>
                <div className="box-proceso p-3 m-1 rounded-4 col-5 col-lg-2 size-box-stadistics">
                    <div  className="d-flex align-items-center">
                        <p className="h3"><strong>10</strong></p>
                        <img src={ imagenes.proceso } alt="enproceso-logo" className="stadistic h-100"/>
                    </div>
                    <p className="m-0"><strong>En Proceso</strong></p>
                </div>
                <div className="box-reparados p-3 m-1 rounded-4 col-5 col-lg-2 size-box-stadistics">
                    <div  className="d-flex align-items-center">
                        <p className="h3"><strong>10</strong></p>
                        <img src={ imagenes.reparado } alt="reparados-logo" className="stadistic h-100"/>
                    </div>
                    <p className="m-0"><strong>Reparados</strong></p>
                </div>
                <div className="box-sinreparacion p-3 m-1 rounded-4 col-5 col-lg-2 size-box-stadistics">
                    <div className="d-flex align-items-center">
                        <p className="h3"><strong>10</strong></p>
                        <img src={ imagenes.sinreparar } alt="sinreparacion-logo" className="stadistic h-100"/>
                    </div>
                    <p className="m-0"><strong>Sin Reparación </strong></p>
                </div>
            </div>

            <hr />

            <h3 className="col-12 text-center text-md-start py-4">Servicios más recientes</h3>

            <div className="d-inline d-xl-flex">
       
                <div className="card h-100 bg-black text-white m-1 p-3">

                    <div className='d-flex'>
                        <div className="w-50">
                            <div className="pb-4">
                                <small className="text-white-50 w-50"><strong>Ingresó</strong></small>
                            </div>
                            <div className="w-100 d-flex">                        
                                <img src={ imagenes.user } alt="recepcion-logo" className="h-100 me-3" />
                                <h5 className="card-title">Nombre del tecnico </h5>
                            </div>
                        </div>
                        <div className='w-50 d-flex align-items-end flex-column'>
                            <div className="pb-4">
                                <small className="text-white-50 w-50"><strong>Cliente</strong></small>
                            </div>
                            <div className='ps-3'>
                                <h5 className="card-title">Nombre del Cliente </h5>
                            </div>
                        </div>
                    </div>

                    <div className='w-100 d-flex pt-4'>
                        <img src={ imagenes.box } alt="recepcion-logo" className="h-100 me-3" />
                        <p><strong> nombre de equipoooooooooooooooo</strong></p>
                    </div>

                    <div className="pt-3 d-flex align-items-center">
                        <p className="text-white small w-75">Fecha</p>
                        <button className="box-proceso ver-button">
                            <img src={ imagenes.ver } alt="ver detalle" className='btn-icon mx-1'/> 
                            <span className='m-1'>Ver</span>
                        </button>
                    </div>

                </div>


                <div className="card h-100 bg-black text-white m-1 p-3">

                    <div className='d-flex'>
                        <div className="w-50">
                            <div className="pb-4">
                                <small className="text-white-50 w-50"><strong>Ingresó</strong></small>
                            </div>
                            <div className="w-100 d-flex">                        
                                <img src={ imagenes.user } alt="recepcion-logo" className="h-100 me-3" />
                                <h5 className="card-title">Nombre del tecnico </h5>
                            </div>
                        </div>
                        <div className='w-50 d-flex align-items-end flex-column'>
                            <div className="pb-4">
                                <small className="text-white-50 w-50"><strong>Cliente</strong></small>
                            </div>
                            <div className='ps-3'>
                                <h5 className="card-title">Nombre del Cliente </h5>
                            </div>
                        </div>
                    </div>

                    <div className='w-100 d-flex pt-4'>
                        <img src={ imagenes.box } alt="recepcion-logo" className="h-100 me-3" />
                        <p><strong> nombre de equipoooooooooooooooo</strong></p>
                    </div>

                    <div className="pt-3 d-flex align-items-center">
                        <p className="text-white small w-75">Fecha</p>
                        <button className="box-proceso ver-button">
                            <img src={ imagenes.ver } alt="ver detalle" className='btn-icon mx-1'/> 
                            <span className='m-1'>Ver</span>
                        </button>
                    </div>

                </div>


                <div className="card h-100 bg-black text-white m-1 p-3">

                    <div className='d-flex'>
                        <div className="w-50">
                            <div className="pb-4">
                                <small className="text-white-50 w-50"><strong>Ingresó</strong></small>
                            </div>
                            <div className="w-100 d-flex">                        
                                <img src={ imagenes.user } alt="recepcion-logo" className="h-100 me-3" />
                                <h5 className="card-title">Nombre del tecnico </h5>
                            </div>
                        </div>
                        <div className='w-50 d-flex align-items-end flex-column'>
                            <div className="pb-4">
                                <small className="text-white-50 w-50"><strong>Cliente</strong></small>
                            </div>
                            <div className='ps-3'>
                                <h5 className="card-title">Nombre del Cliente </h5>
                            </div>
                        </div>
                    </div>

                    <div className='w-100 d-flex pt-4'>
                        <img src={ imagenes.box } alt="recepcion-logo" className="h-100 me-3" />
                        <p><strong> nombre de equipoooooooooooooooo</strong></p>
                    </div>

                    <div className="pt-3 d-flex align-items-center">
                        <p className="text-white small w-75">Fecha</p>
                        <button className="box-proceso ver-button">
                            <img src={ imagenes.ver } alt="ver detalle" className='btn-icon mx-1'/> 
                            <span className='m-1'>Ver</span>
                        </button>
                    </div>

                </div>





            </div>            
        </div>
    )
}
export default Home;