import config from '../config/config.js'
/*---------------------------------------------------------------*/

export async function getClients() {
    return fetch(`${config.api.url}/clientes/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        }
    })
        .then(async (response) => {
            return await response.json()
        })
        .catch((error) => {
            console.error(error)
        })
        
}
/*---------------------------------------------------------------*/
export async function getClient(id) {
    return fetch(`${config.api.url}/clientes/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        }
    })
        .then(async (response) => {
            return await response.json()
        })
        .catch((error) => {
            console.error(error)
        })
        
}
/*---------------------------------------------------------------*/
//Crear
export async function newClient(client){
console.log('client-API',client)

    return fetch(`${config.api.url}/clientes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(client)
        
    })
        .then(response => response.json())
}

/*---------------------------------------------------------------*/

export async function editClient(client){
    console.log('client-API',client)
    
        return fetch(`${config.api.url}/clientes/${client._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem('token')}`
            },
            body: JSON.stringify(client)
            
        })
            .then(response => response.json())
    }


/*---------------------------------------------------------------*/
//elimina un cliente
export async function deleteClients(id) {
    return fetch(`${config.api.url}/clientes/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        }
    })
        .then(response => response.json())
}
/*---------------------------------------------------------------*/





/*---------------------------------------------------------------*/

export default {
    getClients,
    getClient,
    newClient,
    editClient,
    deleteClients
}