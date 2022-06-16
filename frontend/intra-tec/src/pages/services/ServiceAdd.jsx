import { useEffect, useState } from 'react';
import { useClient } from '../../context/Client.Context';
import { useService } from '../../context/Service.Context';

export function ServiceAdd(){

    const { state, findClient } = useClient()
    const { addService } = useService()
    
    useEffect(  () => {
        findClient();
   }, [] )

    const [service, setService] = useState({
        "client_id": "",
        "model": "",
        "brand": "",
        "serial_number": "",
        "description": ""
    })

    function send(e){
        e.preventDefault();
        console.log("service",service)
        addService(service)
    }




    return(
            <div>

                <h2>Agregar servicio</h2>

                <form className="row g-3 needs- w-50" onSubmit={(e => send(e))}>
                
                <div className="input-group mb-3">
                    <label className="form-label">cliente
                        <select className="form-select form-select-lg mb-3" onChange={(e) => { setService({...service, "client_id": e.target.value}) }} >
                        <option value="">...</option>
                        {state.clients.map((client)=>( 
                            <option key={client._id} value={client._id}>{client.name_busines}</option>
                        ))}
                            
                        </select>
                    </label>
                </div>

                <div className="mb-1">
                    <label className="form-label">Modelo
                        <input type="text" className="form-control" value={service.model} onChange={(e) => { setService({...service, "model": e.target.value}) }}/>
                    </label>
                </div>
                <div className="mb-1">
                    <label  className="form-label">Marca
                        <input type="text" className="form-control" value={service.brand} onChange={ (e) => {setService({...service, "brand": e.target.value})}}/>
                    </label>
                </div>
                <div className="mb-1">
                    <label className="form-label">Numero de serie
                        <input type="text" className="form-control" value={service.serial_number} onChange={ (e) => {setService({...service, "serial_number": e.target.value})}}/>
                    </label>
                </div>
                <div className="mb-1">
                    <label>Descripción</label>
                    <textarea className="form-control" value={service.description} onChange={ (e) => {setService({...service, "description": e.target.value})}}></textarea>
                    
                </div>

                <button type='submit'>enviar</button>

                </form>

            </div>

        )

}
export default ServiceAdd