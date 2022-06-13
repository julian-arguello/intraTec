
function Home(props){

    return(
        <div className="container">
            <h2 className="d-none" >Home</h2>

            <div className="row text-white d-xs-inline d-sm-flex pt-4 pb-4
                            justify-content-center align-items-center justify-content-lg-evenly">
                
                <div className="bg-secondary p-4 m-1 rounded-4 col-11 col-sm-5 col-lg-2">
                    <p className="h3"><strong>10</strong></p>
                    <strong>Presupuestos</strong>
                </div>
                <div className="bg-primary p-4 m-1 rounded-4 col-11 col-sm-5 col-lg-2">
                    <p className="h3"><strong>10</strong></p>
                    <strong>En Proceso</strong>
                </div>
                <div className="bg-success p-4 m-1 rounded-4 col-11 col-sm-5 col-lg-2">
                    <p className="h3"><strong>10</strong></p>
                    <strong>Reparados</strong>
                </div>
                <div className="bg-danger p-4 m-1 rounded-4 col-11 col-sm-5 col-lg-2">
                    <p className="h3"><strong>10</strong></p>
                    <strong>Sin Reparación </strong>
                </div>
            </div>

            <hr />

            <div className="pt-4 pb-4">
                <h3>Servicios más recientes:</h3>      
                <div className="row d-xs-inline d-sm-flex
                                justify-content-center align-items-center justify-content-lg-evenly">                
                    
                        <div className="card card-body text-white bg-dark col-8 col-md-5 col-xl-3 m-2">

                            <div className="d-flex justify-content-between">
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
                                <button href="#" className="btn btn-info text-white"><strong>Ver +</strong></button>
                            </div>
                        </div>

                        <div className="card card-body text-white bg-dark col-8 col-md-5 col-xl-3 m-2">

                            <div className="d-flex justify-content-between">
                                <p className="card-subtitle fw-light">Cliente:</p>
                                <p className="card-title h5">Coca-cola</p>  
                            </div>                            
                            <div className="d-flex justify-content-between">
                                <p className="text-white fw-light">Equipo Ingresado: </p>                                
                                <p className="text-white fw-semibold"> Condensadora Z-200</p>
                            </div>

                            <hr className="m-0 mb-2" />
                            
                            <div className="d-flex justify-content-between">                     
                                <div>                                    
                                    <p className="card-title h5 m-0">
                                        <span className="card-subtitle mb-2 fw-light badge p-0">Ingreso: </span> Nombre del técnico.
                                    </p> 
                                    <p className="text-white fw-light badge p-0 m-0">Fecha</p> 
                                </div>
                                <button href="#" className="btn btn-info text-white"><strong>Ver +</strong></button>
                            </div>
                        </div>
                    
                        <div className="card card-body text-white bg-dark col-8 col-md-5 col-xl-3 m-2">

                            <div className="d-flex justify-content-between">
                                <p className="card-subtitle fw-light">Cliente:</p>
                                <p className="card-title h5">Pepsi Co.</p>  
                            </div>                            
                            <div className="d-flex justify-content-between">
                                <p className="text-white fw-light">Equipo Ingresado: </p>                                
                                <p className="text-white fw-semibold"> XMZ-H420000</p>
                            </div>

                            <hr className="m-0 mb-2" />
                            
                            <div className="d-flex justify-content-between">                     
                                <div>                                    
                                    <p className="card-title h5 m-0">
                                        <span className="card-subtitle mb-2 fw-light badge p-0">Ingreso: </span> Nombre del técnico.
                                    </p> 
                                    <p className="text-white fw-light badge p-0 m-0">Fecha</p> 
                                </div>
                                <button href="#" className="btn btn-info text-white"><strong>Ver +</strong></button>
                            </div>
                        </div>

                        

                </div>

            </div>
        </div>
    )
}
export default Home;