import config from '../config/config.js'

/*---------------------------------------------------------------*/
//Crear
export async function newService(service){
console.log('client-API',service)

    return fetch(`${config.api.url}/servicios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(service)
        
    })
        .then(response => response.json())
}






/*---------------------------------------------------------------*/

export default {
    newService,
   
}