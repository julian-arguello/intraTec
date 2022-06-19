import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useClient } from '../../context/Client.Context';
import { useService } from '../../context/Service.Context';
import { useAuth }  from '../../context/Auth.Context';
import { schemaServicesCreate } from '../../services/validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export function ServiceFormAdd(){

    let navigate = useNavigate();
    const { state, findClient } = useClient()
    const { addService } = useService()
    const auth = useAuth()
    
    useEffect(  () => {
        findClient();
   }, [] )

   return(
    <Formik
        /*--------------------*/
        initialValues= {{
            "client_id": "",
            "model": "",
            "brand": "",
            "serial_number": "",
            "description": ""
            }}
        /*--------------------*/
        validationSchema={schemaServicesCreate}
        /*--------------------*/
        onSubmit={(service) => {
            service.state = "Recepcionado";
            service.create_at = new Date;
            service.user_id = auth.state.user._id;
            service.softDelete = false
            addService(service)
            .then(()=>(navigate('/servicios')))
        }}
        /*--------------------*/
    >
        {( { errors } )=>(
            <Form className="row g-3 needs- w-50">
                
                <div className="input-group mb-3">
                    <label className="form-label">Cliente
                        <Field 
                            className="form-select form-select-lg mb-3"
                            name="client_id" 
                            as="select"
                        >
                            <option value="">...</option>
                                {state.clients.map((client)=>( 
                                    <option 
                                        key={client._id} 
                                        value={client._id}>{client.name_busines}
                                    </option>
                                ))}
                        </Field>
                        <ErrorMessage name="client_id" component={() => (<span className='validateErrors'>{errors.client_id}</span>)}/>
                    </label>
                </div>
                
                <div className="mb-1">
                    <label className="form-label">Modelo
                        <Field 
                            type="text" 
                            className="form-control" 
                            name="model"
                        />
                        <ErrorMessage name="model" component={() => (<span className='validateErrors'>{errors.model}</span>)}/>
                    </label>
                </div>
                
                <div className="mb-1">
                    <label  className="form-label">Marca
                        <Field 
                            type="text" 
                            className="form-control"
                            name="brand"
                        />
                        <ErrorMessage name="brand" component={() => (<span className='validateErrors'>{errors.brand}</span>)}/>
                    </label>
                </div>
                
                <div className="mb-1">
                    <label className="form-label">Numero de serie
                        <Field 
                            type="text" 
                            className="form-control" 
                            name="serial_number"
                            />
                        <ErrorMessage name="serial_number" component={() => (<span className='validateErrors'>{errors.serial_number}</span>)}/>

                    </label>
                </div>
                
                <div className="mb-1">
                    <label>Descripción</label>
                    <Field 
                        className="form-select form-select-lg mb-3"
                        name="description" 
                        as="textarea"
                    ></Field>
                    <ErrorMessage name="description" component={() => (<span className='validateErrors'>{errors.description}</span>)}/>
                </div>
                
                <button type='submit'>Enviar</button>
            </Form>
        )}
        </Formik>
   )
}
export default ServiceFormAdd