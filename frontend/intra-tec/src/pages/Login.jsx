import { useState } from 'react';
import { useAuth } from '../context/Auth.Context';

import imagenes from '../assets/images';

function Login(){
    const { state, login } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function submit(e){
        e.preventDefault()
        console.log("Login->login()")
        login(email, password)
    }

    return (        
        <div className="fondo">

            <div className="position-absolute top-50 start-50 translate-middle d-flex align-items-center loginBox">
                <div className="flex-shrink-0 mb-auto text-center">
                    <img src={ imagenes.logo } alt="logo" />
                    <div className="pb-5"></div>
                    <img src={ imagenes.edificios } alt="edificios" />
                </div>

                <div className="flex-grow-1 ms-5">
                    <h1 className="texte-center h2">Bienvenido</h1>
                    <form onSubmit={(e)=>submit(e)} className="w-100 m-auto text-center">
                        <div className="mb-3">
                            <label  className="form-label text-start">Email address
                                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-start">Password
                                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                            </label>
                        </div>                
                        <button type="submit" className="btn btn-outline-primary w-100 ">Ingresar</button>
                    </form>
                    {state.error !== '' ? <p className="text-center text-danger pt-2">{state.error}</p> : ''}       
                </div>
            </div>                  
        </div>
    )
}

export default Login