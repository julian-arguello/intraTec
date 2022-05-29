import { createContext, useState, useContext, useEffect } from "react";
import API from '../api/clients.api';

export const ClientsContext = createContext();


//se encarga de manejar todo la info de Clientes.
export function ClientsProvider(props) {
    const [clients, setClients] = useState([])

    const [client, setClient] = useState({})


/*---------------------------------------------------------------*/
// todos 
    useEffect( async () =>{
           const datos = await API.getClients()
           console.log('datos',datos)
            await setClients(datos)
           console.log('clients',clients)
    }, [])
/*---------------------------------------------------------------*/
//traemos uno
const getClientId = async (id) => {
     await setClient(await API.getClient(id))
}

/*---------------------------------------------------------------*/
//crear
const newClient = async (client) =>{
    console.log('newClient-Context',client)
    return await API.newClient(client)
    .catch(() => {
        setClients([...clients, client])
         throw new Error('Error al crear el Cliente');
     })
}

/*---------------------------------------------------------------*/
//Editar
const editClient = async (client) =>{
    console.log('EditClient-Context',client)
    return await API.editClient(client)
    .catch(() => {
        setClients([...clients, client])
         throw new Error('Error al crear el Cliente');
     })
}


/*---------------------------------------------------------------*/
//Eliminamos
    const remove = async (client) => {
        setClients(clients.filter(c => c._id !== client._id))
        console.log('client.id',client._id)
        return await API.deleteClients(client._id)
            .catch(() => {
               setClients([...clients, client])
                throw new Error('Error al eliminar el Cliente');
            })
    }
/*---------------------------------------------------------------*/

    return (
        <ClientsContext.Provider value={{ clients, setClients, remove, getClientId, client, newClient, editClient }}>
            {console.log('ClientsContext.Provider')}
            {props.children}
        </ClientsContext.Provider>
    )
}

export function useClients() {
    const context = useContext(ClientsContext);
    if (context === undefined) {
        throw new Error("useClients debe utilizarse dentro de un ClientsProvider");
    }
    return context;
}