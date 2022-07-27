import config from "../config/config";

/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/
//Login.
export async function login(email, password){
    return fetch(`${config.api.url}/iniciar-sesion`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
    .then(async (res) => {
        const data = await res.json()
        console.log('respuesta: ',res.status)
        if(res.status === 200) {
            return data;
        }
        else{
            throw new Error(data.msg)
        }
    })
}
/*-----------------------------------------------------------------*/    
/*-----------------------------------------------------------------*/