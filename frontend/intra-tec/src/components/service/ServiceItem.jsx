import { useService }  from '../../context/Service.Context';
import stateClass from '../../service/service.state'

export function ServiceItem(){
    const { state } = useService()
    let classState = "card-header alert m-0 "
  
    return(
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {console.log(state.services)}
          {state.services.map((service)=>(

            <div key={service._id} className="col" >
              <div className="card h-100">
                <div className={classState + stateClass(service.state)}>
                  <small className="text-muted"><strong>Estado: {service.state}</strong></small>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Modelo: {service.model}</h5>
                  <ul>
                    <li>Marca: {service.brand}</li>
                    <li>Numero de serie: {service.serial_number}</li>
                    <li>Ingreso : {service.create_at}</li>
                  </ul>
                </div>
                <div className="card-footer btn-group">
                    <button type="button" className="btn btn-outline-primary">Detalle</button>
                    <button type="button" className="btn btn-outline-primary">Editar</button>
                    <button type="button" className="btn btn-outline-primary">Borrar</button>
                </div>
              </div>
            </div>
          ))}
          </div>
    );
}
export default ServiceItem