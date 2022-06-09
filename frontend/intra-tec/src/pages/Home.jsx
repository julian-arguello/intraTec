
function Home(props){





    return(
        <div className="container pt-4">
            <h2>Home</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis labore odio, ex veritatis consequat
                ur possimus odit cupiditate molestias adipisci officiis quidem veniam, officia dolorum eaque error exercitat
                ionem quis. Magnam, officia.
            </p>

            <div className="grid d-flex justify-content-evenly w-100 text-white pt-4 pb-4">
                <div className="bg-secondary p-5 rounded-4">
                    <p className="h3"><strong>10</strong></p>
                    <strong>Presupuestos</strong>
                </div>
                <div className="bg-primary p-5 rounded-4">
                    <p className="h3"><strong>10</strong></p>
                    <strong>En Proceso</strong>
                </div>
                <div className="bg-success p-5 rounded-4">
                    <p className="h3"><strong>10</strong></p>
                    <strong>Reparados</strong>
                </div>
                <div className="bg-danger p-5 rounded-4">
                    <p className="h3"><strong>10</strong></p>
                    <strong>Sin Reparación </strong>
                </div>
            </div>

            <hr />
            <div className="pt-4 pb-4">
                <h3 >Servicios más recientes:</h3>
                <div className="grid d-flex justify-content-evenly w-100 pt-4">                
                

                
                    
                        <div class="card card-body">
                            <h5 class="card-subtitle mb-2 text-muted h6">Ingresó</h5>
                            <p class="card-title h5">Carlos Juarez</p>                            
                            <p class="card-text">Equipo Ingresado.</p>
                            <p class="card-text text-muted">Fecha</p>
                            <div>
                                <a href="#" class="">Card link</a>
                                <a href="#" class="">Another link</a>
                            </div>
                        </div>
                    

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="">Card link</a>
                            <a href="#" class="">Another link</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="">Card link</a>
                            <a href="#" class="">Another link</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Home;