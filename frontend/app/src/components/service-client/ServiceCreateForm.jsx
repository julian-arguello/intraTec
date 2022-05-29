import { useState } from 'react'
import { useServices } from '../../context/Services.Context';
import { schemaServicesCreate } from '../../services/validate';
import { useNavigate } from "react-router-dom";


export function ServiceCreateForm(props) {

    const { newService } = useServices();

    const navigate = useNavigate();

    const [model, setModel] = useState("")
    const [brand, setBrand] = useState("")
    const [serial_number, setSerialNumber] = useState("")
    const [description, setDescription] = useState("")
 

    function send(e) {
        e.preventDefault()
        
        const service = {
            'model': model,
            'brand': brand,
            'serial_number': serial_number,
            'description': description,
            'client_id': props.id
        }
        schemaServicesCreate.validate(service)
            .then((dataService) =>{
                newService(dataService)
                .then((data) =>{
                    console.log('newService',data)
                })

            })
            .catch((err) => {
                console.log(err.errors)
             })

    }

    return (
        <div className="pt-4 pb-4 container">

            <h2 className="	">Alta del servico</h2>
            <p>Completa los campos para cargar un nuevo servico.</p>

            <div className="p-4 text-center">

                <form onSubmit={(e) => send(e)} className="pb-3">

                    <div className="mb-3">
                        <label htmlFor="model" className="form-label d-none">Modelo</label>
                        <input type="text"
                            name="model"
                            id="model"
                            className="form-control"
                            placeholder="Modelo"
                            value={model} onChange={(e) => { setModel(e.target.value) }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="brand" className="form-label d-none">Marca</label>
                        <input type="text"
                            name="brand"
                            id="brand"
                            className="form-control"
                            placeholder="Marca"
                            value={brand} onChange={(e) => { setBrand(e.target.value) }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="serial_number" className="form-label d-none">Numero de serie</label>
                        <input type="text"
                            name="serial_number"
                            id="serial_number"
                            className="form-control"
                            placeholder="Numero de serie"
                            value={serial_number} onChange={(e) => { setSerialNumber(e.target.value) }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label d-none">Descripción</label>
                        <input type="description"
                            name="description"
                            id="description"
                            className="form-control"
                            placeholder="Descripción"
                            value={description} onChange={(e) => { setDescription(e.target.value) }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Cargar Servicio</button>
                </form>

            </div>
        </div>
    )
}

export default ServiceCreateForm;