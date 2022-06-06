import { useState } from 'react';
import { useAuth } from '../context/Auth.Context';
//import * as API from '../api/auth.api';

function Login(props){
    const { state, login } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //const [error, setError] = useState("")

    function submit(e){
        e.preventDefault()
        console.log("Login->login()")
        login(email, password)
    }

    return (
        <div>
            <form onSubmit={(e)=>submit(e)}>
                <br />
                Email:
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>  
                <br />
                Password:
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>  
                <br />
                <button type='submit'>Acceder</button>
            </form>
            {state.error !== '' ? <p>{state.error}</p> : ''}
        </div>
    )

}

export default Login