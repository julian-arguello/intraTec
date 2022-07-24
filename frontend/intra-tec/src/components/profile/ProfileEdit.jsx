import { useAuth } from '../../context/Auth.Context';
import { useUser } from '../../context/User.Context';
import { useNotify } from '../../context/Notify.Context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaUserUpdate } from '../../services/validate';
import { useLocation } from "react-router-dom";

function ProfileEdit(){

    const { notify } = useNotify();
    const { state , updateUserAuth} = useAuth();
    const  user = useUser();
    

    return(        
        <Formik 
                /*--------------------*/
                initialValues= {{
                    "name": state.user.name,
                    "lastname": state.user.lastname,
                    }}
                /*--------------------*/
                validationSchema={schemaUserUpdate}
                /*--------------------*/
                onSubmit={async (data) => {
                    data._id=state.user._id
                    updateUserAuth(data)
                    user.editUser(data)
                    .then(()=>{
                        notify({msj: 'Su perfil fue editado correctamente!'})
                    })
                }}
                /*--------------------*/
        >
            {( { errors, touched } )=>(
                <Form className="w-100 m-auto text-center">        
            
                                <div className="mb-3">
                                    <label className="form-label text-start  w-100">Nombre
                                        <Field 
                                            type="text" 
                                            className="form-control" 
                                            name="name"
                                        />
                                        <ErrorMessage name="name" component={() => (<div className='validateErrors loginText'>{errors.name}</div>)}/>
                                        {!(errors.name && touched.name) && <div className="form-text m-0 loginText">
                                        Ingrese al menos tres caracteres.
                                        </div>}
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-start  w-100">Apellido
                                        <Field 
                                            type="text" 
                                            className="form-control" 
                                            name="lastname"
                                        />
                                        <ErrorMessage name="lastname" component={() => (<div className='validateErrors loginText'>{errors.lastname}</div>)}/>
                                        {!(errors.lastname && touched.lastname) && <div className="form-text m-0 loginText">
                                        Ingrese al menos tres caracteres.
                                        </div>}
                                    </label>
                                </div>
                                

                                <button type="submit" className="btn btn-outline-primary w-100 ">Editar</button>
                                {state.error !== '' ? <p className="text-center text-danger pt-2">{state.error}</p> : ''}       

                </Form>
            )}
                
        </Formik>
    )
} 
export default ProfileEdit;