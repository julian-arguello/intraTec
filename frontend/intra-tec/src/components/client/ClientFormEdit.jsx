import { useEffect } from 'react';
import { useParams , useNavigate, Link } from 'react-router-dom'
import { useClient } from '../../context/Client.Context';
import { schemaClientUpdate } from '../../services/validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';

export function ClientFormEdit(){

    let navigate = useNavigate();
    const { state, editClient, findClientId } = useClient()
    const {id} = useParams()
    const{ notify } = useNotify()
    
    useEffect( () => {
        findClientId(id)
   }, [] )

   return(
    <Formik
        /*--------------------*/
        initialValues= {{
            "name_busines": state.client.name_busines,
            "cuit_cuil": state.client.cuit_cuil,
            "phone": state.client.phone,
            "email": state.client.email
            }}
        /*--------------------*/
        validationSchema={schemaClientUpdate}
        /*--------------------*/
        onSubmit={(client) => {
            client._id = state.client._id
            client.create_at = new Date;
            client.softDelete = false
            editClient(client)
            .then(()=>{
                notify({msj: 'El Cliente fue editado correctamente.'})
                navigate('/clientes')
            })
        }}
        /*--------------------*/
    >
        {( { errors } )=>(
            <Form>
                <div className='row mb-4'>

                    <div className="col-sm-4">
                        <label className="form-label w-100">Nombre del Cliente
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="name_busines"
                            />
                            <ErrorMessage name="name_busines" component={() => (<span className='validateErrors'>{errors.name_busines}</span>)}/>
                        </label>
                    </div>
                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <label  className="form-label w-100">cuit/cuil
                            <Field 
                                type="text" 
                                className="form-control"
                                name="cuit_cuil"
                            />
                            <ErrorMessage name="cuit_cuil" component={() => (<span className='validateErrors'>{errors.cuit_cuil}</span>)}/>
                        </label>
                    </div>
                </div>

                <div className='row mb-4'>
                    <div className="col-sm-4">
                        <label className="form-label w-100">Telefono
                            <Field 
                                type="number" 
                                className="form-control" 
                                name="phone"
                            />
                            <ErrorMessage name="phone" component={() => (<span className='validateErrors'>{errors.phone}</span>)}/>
                        </label>
                    </div>
                    <div className="col-sm-4">
                        <label className="form-label w-100">Email
                            <Field 
                                type="email" 
                                className="form-control" 
                                name="email"
                            />
                            <ErrorMessage name="email" component={() => (<span className='validateErrors'>{errors.email}</span>)}/>
                        </label>
                    </div>
                </div>
                            
                <div className='row'>
                    <div className="col-sm-8 d-flex flex-column align-items-sm-end">
                        <Link to={`/clientes/${id}`} className="btn-add btn-back me-sm-3 order-2 order-sm-1 text-center">
                                    Atrás
                        </Link>
                        <button type='submit' className='btn-confirm order-1 order-sm-2 mb-4 mb-sm-0'>Confirmar</button>
                    </div>                    
                </div>
            </Form>
        )}
        </Formik>
   )
}
export default ClientFormEdit