import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { useService } from '../../context/Service.Context';
import { useNavigate  } from 'react-router-dom';
import { schemaServicesUpdate } from '../../services/validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNotify } from '../../context/Notify.Context';

export function ServiceFormEdit(){

    let navigate = useNavigate();
    const { state, editService, findServiceId, findStateService } = useService()
    const {id} = useParams()
    const{ notify } = useNotify()
    
    useEffect( () => {
        findServiceId(id)
        findStateService()
   }, [] )

   return(
    <Formik
        /*--------------------*/
        initialValues= {{
            "client_id" : state.service.client_id,
            "model": state.service.model,
            "brand": state.service.brand,
            "serial_number": state.service.serial_number,
            "description": state.service.description,
            "state": state.service.state
            }}
        /*--------------------*/
        validationSchema={schemaServicesUpdate}
        /*--------------------*/
        onSubmit={(service) => {
            service._id = state.service._id
            editService(service)
            .then(()=>{
                notify({msj: 'El servicio fue editado Correctamente.'})
                navigate('/servicios')
            })
            
        }}
        /*--------------------*/
    >
        {( { errors } )=>(
            <Form className="row g-3 needs- w-50">
            <div className="input-group mb-3">
                    <label className="form-label">Cliente
                        <Field 
                            className="form-select form-select-lg mb-3"
                            name="state" 
                            as="select"
                        
                        >
                                
                                {state.stateService.map((stateS)=>( 
                                    <option 
                                        key={stateS._id} 
                                        value={stateS.state_name}>{stateS.state_name}
                                    </option>
                                ))}
                        </Field>
                        <ErrorMessage name="state" component={() => (<span className='validateErrors'>{errors.state}</span>)}/>
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
export default ServiceFormEdit