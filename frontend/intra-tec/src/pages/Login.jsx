import { useState } from 'react';
import { useAuth } from '../context/Auth.Context';

function Login(){
    const { state, login } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function submit(e){
        e.preventDefault()
        login(email, password)
    }

    return (
        <div className="mb-3 p-5">
            <form onSubmit={(e)=>submit(e)} className="w-50 m-auto">
                <div className="mb-3">
                    <label  className="form-label">Email address
                        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </label>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password
                        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1" />
                    </label>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {state.error !== '' ? <p>{state.error}</p> : ''}
        </div>
    )

}

export default Login