import { useState } from 'react'
import {useAuth} from '../context/Auth.Context'
import { useNavigate } from "react-router-dom";


function Login(props) {

    const {login, user } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function send(e) {
        e.preventDefault()

        console.log(email, password)
        login(email, password)
            .then(() => {
                navigate('/clientes')
            })
    }

    return (
        <div>
            <form onSubmit={(e) => send(e)}>

                <br></br>
                <br></br>

                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value)}} />

                <br></br>
                <br></br>

                <label htmlFor="email">Password</label>
                <input id="email" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />

                <br></br>
                <br></br>

                <button>Iniciar Sesión</button>

            </form>
        </div>
    )
}

export default Login