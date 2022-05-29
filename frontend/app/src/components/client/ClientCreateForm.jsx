import { useState } from 'react'
import { useClients } from '../../context/Clients.Context';
import { schemaClientRegister } from '../../services/validate';
import { useNavigate } from "react-router-dom";


export function ClientCreateForm() {

    const { newClient } = useClients();

    const navigate = useNavigate();

    const [name_busines, setNameBusines] = useState("")
    const [cuit_cuil, setCuitCuil] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    function send(e) {
        e.preventDefault()
        

        const client = {
            'name_busines': name_busines,
            'cuit_cuil': cuit_cuil,
            'phone': phone,
            'email': email
        }

        schemaClientRegister.validate(client)
        .then( () => {
            newClient(client)
            .then((response)=>{
                console.log('response',response)
                navigate('/clientes')
            })

        })
        .catch((err) => {
           console.log(err.errors)
        })



    }

    return (
        <div className="pt-4 pb-4 container">

            <h2 className="	">Alta de Cliente</h2>
            <p>Completa los campos para cargar un nuevo cliente.</p>

            
            <div className="p-4 text-center">

                <form onSubmit={(e) => send(e)} className="pb-3">

                    <div className="mb-3">
                        <label htmlFor="name_busines" className="form-label d-none">Nombre del Cliente</label>
                        <input type="text"
                            name="name_busines"
                            id="name_busines"
                            className="form-control"
                            placeholder="Nombre de la empresa / Razon social / Cliente."
                            value={name_busines} onChange={(e) => { setNameBusines(e.target.value) }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="cuit_cuil" className="form-label d-none">Cuit-Cuil</label>
                        <input type="text"
                            name="cuit_cuil"
                            id="cuit_cuil"
                            className="form-control"
                            placeholder="Cuit / Cuil del Cliente"
                            value={cuit_cuil} onChange={(e) => { setCuitCuil(e.target.value) }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label d-none">Numero del cliente</label>
                        <input type="text"
                            name="phone"
                            id="phone"
                            className="form-control"
                            placeholder="Telefono del cliente"
                            value={phone} onChange={(e) => { setPhone(e.target.value) }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label d-none">Email</label>
                        <input type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Correo del Cliente."
                            value={email} onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Cargar Equipo</button>
                </form>

            </div>
        </div>
    )
}

export default ClientCreateForm;