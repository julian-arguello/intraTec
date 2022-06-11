import { useState } from 'react';
import { useAuth } from '../context/Auth.Context';

import imagenes from '../assets/images';

function Login(){
    const { state, login } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function submit(e){
        e.preventDefault()
        login(email, password)
    }

    return (        
        <div className="fondo">

            <div className="position-absolute top-50 start-50 translate-middle d-md-flex p-5 loginBox">
                <div className="flex-shrink-0 mb-auto text-center d-xs-inline">
                    <img src={ imagenes.desk } alt="logo" className="d-none d-md-inline col-10 w-auto" />
                    <img src={ imagenes.tablet } alt="logo" className="d-none d-sm-inline d-md-none col-12 w-auto" />
                    <img src={ imagenes.mob } alt="logo" className="d-xs-inline d-sm-none col-12 w-auto" />                    
                    <div className="pb-5"></div>
                    <img src={ imagenes.edificios } alt="edificios" className="d-none d-md-block w-auto"/>
                </div>

                <div className="flex-grow-1 ms-md-5 col-xs-12">                    
                    <h1 className="text-center text-md-start h2 pb-2 pb-md-0">Bienvenido</h1>
                    <form   onSubmit={(e)=>submit(e)} className="w-100 m-auto text-center">
                        <div className="mb-3">
                            <label  className="form-label text-start  w-100">Email
                                <input  type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} 
                                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                    />
                            </label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-start  w-100">Contraseña
                                <input  type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} 
                                        className="form-control" id="exampleInputPassword1" 
                                    />
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