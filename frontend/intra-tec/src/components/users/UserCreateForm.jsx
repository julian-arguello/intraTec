import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';
import { useUser } from '../../context/User.Context';
import { schemaLogin } from '../../services/validate';

export function UserCreateForm(){

    const { notify } = useNotify();
    const { addUser } = useUser();
    return(
        <Formik 
            /*--------------------*/
            initialValues= {{
                "email": "",
                "name": "",
                "lastname": "",
                "role_id": "",
                "password": "",
                }}
            /*--------------------*/
            validationSchema={schemaLogin}
            /*--------------------*/
            onSubmit={(data) => {
                addUser(data)
                .then((res)=>{
                    notify(res)
                })            
            }}
            /*--------------------*/
        >
            {( { errors, touched } )=>(
                <Form className="w-100 m-auto text-center">

                    <div className="mb-3">
                        <label className="form-label text-start  w-100">Correo electrónico
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="email"
                            />
                            <ErrorMessage name="email" component={() => (<div className='validateErrors loginText'>{errors.email}</div>)}/>
                            {!(errors.email && touched.email) && <div className="form-text m-0 loginText">Ejemplo: "tu_correo@mail.com".</div>}
                        </label>
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-start  w-100">Nombre
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="name"
                            />
                            <ErrorMessage name="name" component={() => (<div className='validateErrors loginText'>{errors.name}</div>)}/>
                            {!(errors.name && touched.name) && <div className="form-text m-0 loginText"></div>}
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
                            {!(errors.lastname && touched.lastname) && <div className="form-text m-0 loginText"></div>}
                        </label>
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
                </Form>
            )}                
        </Formik>
    )
}
export default UserCreateForm