import * as yup from 'yup';

/*
|--------------------------------------------------------------------------
| Users
|--------------------------------------------------------------------------
*/

//* Esquema para registro de usuario.
export const schemaUserRegister = yup.object().shape({
    /*------------------------------------------------------------*/
    email: yup.string().email().required('El email es obligatorio.'),
    /*------------------------------------------------------------*/
    password: yup.string().min(5).required('La contraseña es obligatoria.'),
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/

//* Esquema para acatualizar usuario.
export const schemaUserUpdate = yup.object().shape({
    /*------------------------------------------------------------*/
    name: yup.string().min(3).required('El nombre es obligatorio.'),
    /*------------------------------------------------------------*/
    lastname: yup.string().min(3).required('El apellido es obligatorio.'),
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/

/*
|--------------------------------------------------------------------------
| Clients
|--------------------------------------------------------------------------
*/
export const schemaClientRegister = yup.object().shape({
    /*------------------------------------------------------------*/
    name_busines: yup.string()
        .min(3, 'Este campo debe tener como mínimo tres caracteres.')
        .required('El nombre del cliente es obligatorio.'),
    /*------------------------------------------------------------*/
    cuit_cuil: yup.string()
        .min(11, 'Este campo debe tener once caracteres numéricos.')
        .max(11, 'Este campo debe tener once caracteres numéricos como máximo.')
        .required('El Cuit / Cuil es obligatorio.'),
    /*------------------------------------------------------------*/
    phone: yup.string()
        .min(8, 'Este campo debe tener como mínimo ocho caracteres.')
        .required('El teléfono es obligatorio.'),
    /*------------------------------------------------------------*/
    email: yup.string()
        .email('El correo electrónico no es válido.')
        .required('El email es obligatorio.'),
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/

export const schemaClientUpdate = yup.object().shape({
    /*------------------------------------------------------------*/
    name_busines: yup.string()
        .min(3, 'Este campo debe tener como mínimo tres caracteres')
        .required('El nombre del cliente es obligatorio.'),
    /*------------------------------------------------------------*/
    cuit_cuil: yup.string()
        .min(11, 'Este campo debe tener once caracteres numéricos.')
        .max(11, 'Este campo debe tener once caracteres numéricos como máximo.')
        .required('El Cuit / Cuil es obligatorio.'),
    /*------------------------------------------------------------*/
    phone: yup.string()
        .min(8, 'Este campo debe tener como mínimo ocho caracteres')
        .required('El teléfono es obligatorio.'),
    /*------------------------------------------------------------*/
    email: yup.string()
        .min(6)
        .required('El email es obligatorio.'),
}).noUnknown()
/*--------------------------------------------------------------------------------------------*/

export const schemaClientUpdateService = yup.object().shape({
    service_id: yup.string()
        .min(10, 'Este campo debe contener como mínimo 10 caracteres.')
        .max(24, 'Este campo debe contener como máximo 24 caracteres.')
        .required('el IDE del servicio es obligatorio.'),
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/

/*
|--------------------------------------------------------------------------
| Services
|--------------------------------------------------------------------------
*/
export const schemaServicesCreate = yup.object().shape({
    /*------------------------------------------------------------*/
    model: yup.string()
        .required('El modelo del equipo es obligatorio.')
        .min(3, 'Este campo debe contener como mínimo tres caracteres.'),
    /*------------------------------------------------------------*/
    brand: yup.string()
        .required('El nombre de la marca es obligatorio.')
        .min(2, 'Este campo debe contener como mínimo dos caracteres.'),
    /*------------------------------------------------------------*/
    serial_number: yup.string()
        .required('El número de serie es obligatorio.')
        .min(6, 'Este campo debe contener como mínimo seis caracteres.'),
    /*------------------------------------------------------------*/
    description: yup.string()
        .required('La descripción es obligatoria.')
        .min(10, 'Este campo debe contener como mínimo diez caracteres.'),
    /*------------------------------------------------------------*/
    client_id: yup.string()
    .required('El cliente es obligatorio.')
    .min(24, 'Selecciona el cliente por favor.'),
    /*------------------------------------------------------------*/
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/

export const schemaServicesUpdate = yup.object().shape({
    /*------------------------------------------------------------*/
    model: yup.string()
        .min(3, 'Este campo debe contener como mínimo tres caracteres.')
        .required('El modelo del equipo es obligatorio.'),
    /*------------------------------------------------------------*/
    brand: yup.string()
        .min(2, 'Este campo debe contener como mínimo dos caracteres.')
        .required('El nombre de la marca es obligatorio.'),
    /*------------------------------------------------------------*/
    serial_number: yup.string()
        .min(6, 'Este campo debe contener como mínimo seis caracteres.')
        .required('El número de serie es obligatorio.'),
    /*------------------------------------------------------------*/
    description: yup.string()
        .min(10, 'Este campo debe contener como mínimo diez caracteres.')
        .required('La descripción es obligatoria.'),
    /*------------------------------------------------------------*/
    state: yup.string()
        .min(3, 'Este campo debe contener como mínimo tres caracteres.')
        .required('El estado de reparación es obligatorio.'),
    /*------------------------------------------------------------*/
    client_id: yup.string()
        .min(24, 'Selecciona el cliente por favor.')
        .required('El cliente es obligatorio.'),
    /*------------------------------------------------------------*/
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/

/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
*/
export const schemaLogin = yup.object().shape({
    email: yup.string()
    .email('El correo electrónico no es válido.')
    .required('El email es obligatorio.'),
    /*------------------------------------------------------------*/
    password: yup.string()
    .min(6, "Verificar contraseña.")
    .required('La contraseña es obligatoria.'),
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/