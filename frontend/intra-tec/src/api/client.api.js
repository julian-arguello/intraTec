import config from "../config/config";

//Login.
export async function viewAlls(){
    return fetch(`${config.api.url}/clientes`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('auth-token')
        },
        
    })
    .then(async (res) => {
        const data = await res.json()
        if(res.status === 200) {
            return data;
        }else{
            throw new Error(data.msg)
        }
    })
}

