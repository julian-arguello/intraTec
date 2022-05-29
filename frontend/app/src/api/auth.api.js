import config from '../config/config.js'
/*---------------------------------------------------------------*/

export async function authUser(email, password) {
    return fetch(`${config.api.url}/iniciar-sesion`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(async (response) => {
        const data = await response.json()
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        return data.user

    }).catch((error) => {
        console.error(error)
    })
    
}
/*---------------------------------------------------------------*/
export async function userRegister(email, password) {
    return fetch(`${config.api.url}/usuarios`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(async (response) => {
        const data = await response.json()
        return data.user

    }).catch((error) => {
        console.error(error)
    })
    
}

/*---------------------------------------------------------------*/



export default {
    authUser,
    userRegister

}