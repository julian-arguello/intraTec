import servicesDao from '../model/services.dao.js';
import clientsDao from '../model/clients.dao.js';
import { schemaServicesCreate, schemaServicesUpdate } from '../services/validate.js';


/*-------------------------------------------------------------------------------------------*/
/**
 * Retorna el listado de servicios.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function viewAlls(req, res) {
    console.log('[Users] Todos los Servicios.');
    servicesDao.find()
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
 * Regresa un servicio especifico según su id.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function viewId(req, res) {
    servicesDao.findById(req.params.id)
        .then(async (client) => {



            res.status(200).json(client);
        })
        .catch((err) => {
            console.log('[Error] ', err);
            res.status(500).json({ error: 500, msg: err.msg })
        })
}
/*-------------------------------------------------------------------------------------------*/
/**
 * Crea un nuevo servicio y lo vincula con el usario.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function create(req, res) {
    schemaServicesCreate.validate(req.body)
        .then(async (entity) => {
            entity.state = "Recepcionado";
            entity.create_at = new Date;
            entity.user_id = req.user._id.toString();
            servicesDao.insert(entity)
                .then((entityInsert) => {
                    clientsDao.addService(entity.client_id, entityInsert.insertedId.toString())
                        .then(() => {
                            res.status(200).json({ '[Succes]': 'El servicio fue creado correctamente.' });
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
        })
        .catch((err) => {
            res.status(500).json({
                error: 500, msg: "Error al validar", validateError: err.errors
            })
        })
}
/*-------------------------------------------------------------------------------------------*/
/**
 * Modifica los datos del servicio.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function update(req, res) {
    schemaServicesUpdate.validate(req.body)
        .then(async (entity) => {
            servicesDao.update(req.params.id, entity)
                .then((data) => {
                    res.status(200).json({ '[Succes]': 'El servicio fue modificado correctamente.' });
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
 * Elimina un servicio según su id y los registros del cliente.
 * 
 * @param {*} req 
 * @param {*} res 
 */
export function deleteEntity(req, res) {
    servicesDao.findById(req.params.id)
        .then(async (service) => {
            clientsDao.deleteService(service.client_id, service._id.toString())
                .then(() => {
                    servicesDao.deleteEntity(req.params.id)
                        .then((service) => {
                            res.status(200).json({ '[Succes]': 'El servicio fue eliminado correctamente.' });
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
    create,
    update,
    deleteEntity,
}