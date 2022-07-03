import { useAuth } from '../context/Auth.Context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../context/Notify.Context';
import { schemaLogin } from '../services/validate';
import imagenes from '../assets/images';

function Login(){

    const { notify } = useNotify();
    const { state, login } = useAuth()

    return (       
        <Formik 
                /*--------------------*/
                initialValues= {{
                    "email": "",
                    "password": "",
                    }}
                /*--------------------*/
                validationSchema={schemaLogin}
                /*--------------------*/
                onSubmit={(data) => {
                    login(data.email, data.password)
                    .then(()=>{
                        notify({msj: 'Bienvenido.'})
                    })
                }}
                /*--------------------*/
        >
            {( { errors } )=>(
                <Form className="w-100 m-auto text-center">
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
                                <h2 className="text-center text-md-start h2 pb-2 pb-md-0">Bienvenido</h2>
                                <div className="mb-3">
                                    <label className="form-label text-start  w-100">Email
                                        <Field 
                                            type="text" 
                                            className="form-control" 
                                            name="email"
                                        />
                                        <ErrorMessage name="email" component={() => (<span className='validateErrors'>{errors.email}</span>)}/>
                                    </label>
                                    <div className="form-text m-0">
                                    Utiliza tu correo electrónico para ingresar.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-start  w-100">Contraseña
                                        <Field 
                                            type="password" 
                                            className="form-control" 
                                            name="password"
                                        />
                                        <ErrorMessage name="password" component={() => (<span className='validateErrors'>{errors.password}</span>)}/>
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 ">Ingresar</button>
                                {state.error !== '' ? <p className="text-center text-danger pt-2">{state.error}</p> : ''}       
                            </div>
                        </div>
                    </div>
                </Form>
            )}
                
        </Formik>
        
)}

export default Login