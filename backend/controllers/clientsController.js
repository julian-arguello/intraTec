import clientsDao from '../model/clients.dao.js';
import servicesDao from '../model/services.dao.js';
import { schemaClientRegister, schemaClientUpdate, schemaClientUpdateService } from '../services/validate.js';


/*-------------------------------------------------------------------------------------------*/
/**
 * Retorna el listado de clientes.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function viewAlls(req, res) {
    console.log('[Users] Todos los Clientes.');
    clientsDao.find()
        .then(async (clients) => {
            res.status(200).json(clients);
        })
        .catch((err) => {
            console.log('[Error] ', err);
            res.status(500).json({ err: 500, msg: err.msg })
        })
}
/*-------------------------------------------------------------------------------------------*/
/**
 * Regresa un cliente especifico según su id.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function viewId(req, res) {
    clientsDao.findById(req.params.id)
        .then(async (client) => {
            const services = await servicesDao.find();
            // Recorremos el listado de servicios dentro de cada cliente.
            let serviceClient = [];
            for (const serviceClientId in client.services) {
                //Recorremos los servicios dentro de servicios
                for (const service of services) {
                    // sicoinciden con los del usario lkos guardamos en una variable.
                    if (serviceClientId === service._id.toString()) {
                        serviceClient.push(service);
                    }
                }
            }
            client.services = serviceClient;
            res.status(200).json(client);
        })
        .catch((err) => {
            console.log('[Error] ', err);
            res.status(500).json({ error: 500, msg: err.msg })
        })
}
/*-------------------------------------------------------------------------------------------*/
/**
 * Registra un nuevo cliente.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function register(req, res) {
    schemaClientRegister.validate(req.body)
        .then(async (entity) => {
            const existClient = await clientsDao.findByEmail(entity.cuit_cuil)
            console.log('existClient', existClient)
            if (!(existClient)) {
                entity.services = {};
                clientsDao.insert(entity)
                    .then((user) => {
                        res.status(200).json({ '[Succes]': 'El cliente fue registrado correctamente.' });
                    })
                    .catch((err) => {
                        console.log('[Error] ', err);
                        res.status(500).json({ error: 500, msg: err.msg })
                    })
            } else {
                res.status(400).json({ error: 400, msg: "El cliente ya existe" })
            }
        })
        .catch((err) => {
            res.status(500).json({
                error: 500, msg: "Error al validar", validateError: err.errors
            })
        })
}
/*-------------------------------------------------------------------------------------------*/
/**
 * Modifica los datos del cliente.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function update(req, res) {
    schemaClientUpdate.validate(req.body)
        .then(async (entity) => {
            clientsDao.update(req.params.id, entity)
                .then((user) => {
                    console.log('[entity]', user)
                    res.status(200).json({ '[Succes]': 'El cliente fue modificado correctamente.' });
                })
                .catch((err) => {
                    console.log('[Error] ', err);
                    res.status(500).json({ error: 500, msg: err.msg })
                })
        })
        .catch((err) => {
            res.status(500).json({
                error: 500, msg: "[Error] ", validateError: err.errors
            })
        })
}
/*-------------------------------------------------------------------------------------------*/
/**
 * Agrega un servicio a un cliente.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function addService(req, res) {
    console.log('addService Controller')
    schemaClientUpdateService.validate(req.body)
        .then((data) => {
            clientsDao.addService(req.params.id, data.service_id)
                .then((data)=>{
                    console.log('Controller',data)
                    res.status(200).json({ '[Succes]': 'El servicio fue agregado correctamente.' });
                })
                .catch((err) => {
                    console.log('[Error] ', err);
                    res.status(500).json({ error: 500, msg: err.msg })
                })
        })
        .catch((err) => {
            res.status(500).json({
                error: 500, msg: "[Error] ", validateError: err.errors
            })
        })
}
/*-------------------------------------------------------------------------------------------*/
/**
 * Elimina un cliente según su id y los servicios asociados a este.
 * 
 * @param {*} req 
 * @param {*} res 
 */
export function deleteEntity(req, res) {
    clientsDao.findById(req.params.id)
        .then(async (client) => {
            await servicesDao.deleteEntityclient(req.params.id)
            clientsDao.deleteEntity(req.params.id)
                .then((client) => {
                    res.status(200).json({ '[Succes]': 'El cliente fue eliminado correctamente.' });
                })
                .catch((err) => {
                    console.log('[Error] ', err);
                    res.status(500).json({ error: 500, msg: err.msg })
                })
        })
        .catch((err) => {
            console.log('[Error] ', err);
            res.status(500).json({ error: 500, msg: err.msg })
        })
}
/*-------------------------------------------------------------------------------------------*/

export default {
    viewAlls,
    viewId,
    register,
    update,
    addService,
    deleteEntity,
}