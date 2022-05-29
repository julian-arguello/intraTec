import { useState, useEffect } from 'react'
import { useClients } from '../../context/Clients.Context';
import { schemaClientUpdate } from '../../services/validate';
import { useNavigate } from "react-router-dom";


export function ClientEditForm(props) {

    const { getClientId, client } = useClients();

       const { editClient } = useClients();

    const navigate = useNavigate();

    const [name_busines, setNameBusines] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    useEffect(async () => {
        await getClientId(props.id)
    }, [])

    useEffect(async () => {
        setNameBusines(client.name_busines)
        setPhone(client.phone)
        setEmail(client.email)

    }, [client])
    



    function send(e) {
        e.preventDefault()
        
         console.log('name_busines',name_busines)
         console.log('phone',phone)
         console.log('email',email)

        const clientObjs = {
            'name_busines': name_busines,
            'phone': phone,
            'email': email,
            '_id': props.id
        }
        console.log('clientObjs', clientObjs)
        schemaClientUpdate.validate(clientObjs)
        .then( () => {
            editClient(clientObjs)
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

            <h2 className="	">Editar Cliente</h2>
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
                            value={name_busines || ""} onChange={(e) => { setNameBusines(e.target.value) }}
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label d-none">Numero del cliente</label>
                        <input type="text"
                            name="phone"
                            id="phone"
                            className="form-control"
                            placeholder="Telefono del cliente"
                            value={phone || ""} onChange={(e) => { setPhone(e.target.value) }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label d-none">Email</label>
                        <input type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="Correo del Cliente."
                            value={email || ""} onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Cargar Equipo</button>
                </form>

            </div>
        </div>
    )
}

export default ClientEditForm;