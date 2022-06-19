import * as yup from 'yup';

/*
|--------------------------------------------------------------------------
| Users
|--------------------------------------------------------------------------
*/
/**
 * Esquema para registro de usuario.
 */
export const schemaUserRegister = yup.object().shape({
    email: yup.string().email().required('El email es obligatorio.'),
    password: yup.string().min(5).required('La contraseña es obligatoria.'),
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/
/**
 * Esquema para acatualizar usuario.
 */
export const schemaUserUpdate = yup.object().shape({
    name: yup.string().min(3).required('El nombre es obligatorio.'),
    lastname: yup.string().min(3).required('El apellido es obligatorio.'),
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/
/*
|--------------------------------------------------------------------------
| Clients
|--------------------------------------------------------------------------
*/
export const schemaClientRegister = yup.object().shape({
    name_busines: yup.string().min(3).required('El nombre de la empresa es obligatorio.'),
    cuit_cuil: yup.string().min(11).required('El Cuit/Cuil es obligatorio.'),
    phone: yup.string().min(8).required('El telefono es obligatorio.'),
    email: yup.string().email().required('El email es obligatorio.'),
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/
export const schemaClientUpdate = yup.object().shape({
    name_busines: yup.string().min(3).required('El nombre de la empresa es obligatorio.'),
    phone: yup.string().min(8).required('El telefono es obligatorio.'),
    email: yup.string().min(6).required('El email es obligatorio.'),
}).noUnknown()
/*--------------------------------------------------------------------------------------------*/
export const schemaClientUpdateService = yup.object().shape({
    service_id: yup.string().min(24).max(24).required('el ide del servicio es obligatorio.'),
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/
/*
|--------------------------------------------------------------------------
| services
|--------------------------------------------------------------------------
*/


export const schemaServicesCreate = yup.object().shape({
    /*------------------------------------------------------------*/
    model: yup.string()
        .required('El modelo del equipo es obligatorio.')
        .min(3, 'Minimo 3 Caracteres.'),
    /*------------------------------------------------------------*/
    brand: yup.string()
        .required('El nombre de la marca es obligatorio.')
        .min(2),
    /*------------------------------------------------------------*/
    serial_number: yup.string()
        .required('El numero de serie es obligatorio.')
        .min(6, 'Minimo 6 Caracteres.'),
    /*------------------------------------------------------------*/
    description: yup.string()
        .required('La descripcion es obligatoria.')
        .min(10, 'La descripcion tiene minimo 10 caracteres,'),
    /*------------------------------------------------------------*/
    client_id: yup.string()
    .required('El cliente es obligatorio.')
    .min(24, 'Selecciona el cliente por favor.'),
    /*------------------------------------------------------------*/
}).noUnknown()




/*-------------------------------------------------------------------------------------------*/
export const schemaServicesUpdate = yup.object().shape({
    model: yup.string().min(3).required('El modelo del equipo es obligatorio.'),
    brand: yup.string().min(2).required('El nombre de la marca es obligatorio.'),
    serial_number: yup.string().min(6).required('El numero de serie es obligatorio.'),
    description: yup.string().min(10).required('La descripcion es obligatoria.'),
    state: yup.string().min(3).required('El estado de reparacion es obligatorio.'),
    client_id: yup.string().min(24).required('El cliente es obligatorio.'),
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/
/*
|--------------------------------------------------------------------------
| login
|--------------------------------------------------------------------------
*/
export const schemaLogin = yup.object().shape({
    email: yup.string().email().required('El email es obligatorio.'),
    password: yup.string().min(6).required('La contraseña es obligatoria.'),
}).noUnknown()
/*-------------------------------------------------------------------------------------------*/