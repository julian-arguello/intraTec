import { useState } from 'react'
import { schemaUserRegister } from '../services/validate';
import {useAuth} from '../context/Auth.Context'

export function Register() {

    const { register } = useAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function send(e) {
        e.preventDefault()
        
        const user = {
            'email': email,
            'password': password
        }

        schemaUserRegister.validate(user)
        .then( () => {
            console.log(user)
            register(user.email, user.password)
        })
        .catch((err) => {
           console.log(err.errors)
        })

    }


return (
    <section className="container">
        <form onSubmit={(e) => send(e)} className="pb-3">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" className="form-control"
              value={email} onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" className="form-control"
              value={password} onChange={(e) => { setPassword(e.target.value) }}
              />
              <small id="helpId" className="text-muted">La contraseña deberá tener más de 6 caracteres</small>
            </div>
            <button type="submit" className="btn btn-primary">Registrarse</button>
        </form>
    </section>
)
}
export default Register
