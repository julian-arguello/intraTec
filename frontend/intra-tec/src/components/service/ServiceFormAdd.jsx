import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useClient } from '../../context/Client.Context';
import { useService } from '../../context/Service.Context';
import { useAuth }  from '../../context/Auth.Context';
import { schemaServicesCreate } from '../../services/validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';

export function ServiceFormAdd(){

    let navigate = useNavigate();
    const { state, findClient } = useClient()
    const { addService } = useService()
    const auth = useAuth()
    const{ notify } = useNotify()
    
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
            .then(()=>{
                notify({msj: 'El servicio fue creado correctamente.'})
                navigate('/servicios')
            })
        }}
        /*--------------------*/
    >
        {( { errors } )=>(
            <Form className="row row-cols-1 row-cols-lg-2">
                
                <div className='col'>
                    <label className="form-label">Cliente
                        <Field 
                            className="form-select mb-3"
                            name="client_id" 
                            as="select"
                        >
                            <option value="">Selecciona un cliente</option>
                                {state.clients.map((client)=>( 
                                    <option 
                                        key={client._id} 
                                        value={client._id}>{client.name_busines}
                                    </option>
                                ))}
                        </Field>
                        <ErrorMessage name="client_id" component={() => (<span className='validateErrors'>{errors.client_id}</span>)}/>
                    </label>
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