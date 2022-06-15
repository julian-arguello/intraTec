import config from "../config/config";

/*------------------------------------------------------------------------*/
//Alls.
export async function viewAlls(){
    return fetch(`${config.api.url}/servicios`,{
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
/*------------------------------------------------------------------------*/
export async function viewId(id){
    return fetch(`${config.api.url}/servicios/${id}`,{
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

