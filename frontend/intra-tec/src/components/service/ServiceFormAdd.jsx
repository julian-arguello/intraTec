import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useClient } from '../../context/Client.Context';
import { useService } from '../../context/Service.Context';
import { useAuth }  from '../../context/Auth.Context';
import { schemaServicesCreate } from '../../services/validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';

export function ServiceFormAdd(){

    const navigate = useNavigate();
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
            <Form>
                <div className='row mb-4'>
                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <label className="form-label w-100">Cliente
                            <Field 
                                className="form-select"
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
                    </div>
                    <div className="col-sm-4">
                        <label className="form-label w-100">Modelo
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="model"
                            />
                            <ErrorMessage name="model" component={() => (<span className='validateErrors'>{errors.model}</span>)}/>
                        </label>
                    </div>
                </div>

                <div className='row mb-4'>
                    <div className="col-sm-4 mb-4 mb-sm-0">
                        <label  className="form-label w-100">Marca
                            <Field 
                                type="text" 
                                className="form-control"
                                name="brand"
                            />
                            <ErrorMessage name="brand" component={() => (<span className='validateErrors'>{errors.brand}</span>)}/>
                        </label>
                    </div>
                    <div className="col-sm-4">
                        <label className="form-label w-100">Numero de serie
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="serial_number"
                            />
                            <ErrorMessage name="serial_number" component={() => (<span className='validateErrors'>{errors.serial_number}</span>)}/>
                        </label>
                    </div>
                </div>
               
                <div className="row mb-4">
                    <div className="col-sm-8">
                        <label className='w-100'>Descripción
                            <Field 
                                className="form-select"
                                name="description" 
                                as="textarea"
                            />
                            <ErrorMessage name="description" component={() => (<span className='validateErrors'>{errors.description}</span>)}/>
                        </label>
                    </div>
                </div>
                
                <div className='row'>
                    <div className="col-sm-8 d-flex flex-column align-items-sm-end">
                        <button className='btn-add btn-back me-sm-3 order-2 order-sm-1' onClick={() => navigate(-1)}>Atrás</button>
                        <button type='submit' className='btn-confirm order-1 order-sm-2 mb-4 mb-sm-0'>Confirmar</button>
                    </div>                    
                </div>
            </Form>
        )}
        </Formik>
   )
}
export default ServiceFormAdd