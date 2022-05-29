import usersDao from '../model/users.dao.js';
import rolesDao from '../model/roles.dao.js';
import { schemaUserRegister, schemaUserUpdate } from '../services/validate.js';
import bcrypt from 'bcrypt';

/*-------------------------------------------------------------------------------------------*/
/**
 * Retorna el listado de usarios.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function viewAlls(req, res) {
    console.log('[Users] Todos los usarios.');
    usersDao.find()
        .then(async (users) => {
            const roles = await rolesDao.find();
            for (const user of users) {
                roles.forEach(function (role) {
                    if (role._id.toString() === user.role_id) {
                        user.role = role;
                    }
                });
            }
            res.status(200).json(users);
        })
        .catch((err) => {
            console.log('[Error] ', err);
            res.status(500).json({ err: 500, msg: err.msg })
        })
}
/*-------------------------------------------------------------------------------------------*/
/**
 * Regresa un usario especifico según su id.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function viewId(req, res) {
    usersDao.findById(req.params.id)
        .then(async (user) => {
            user.role = await rolesDao.findById(user.role_id)
            res.status(200).json(user);
        })
        .catch((err) => {
            console.log('[Error] ', err);
            res.status(500).json({ error: 500, msg: err.msg })
        })
}
/*-------------------------------------------------------------------------------------------*/
/**
 * Registra un nuevo usario.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function register(req, res) {
    schemaUserRegister.validate(req.body)
        .then(async (entity) => {
            //Consultamos si ya existe.
            const existUser = await usersDao.findByEmail(entity.email)
            if (!(existUser)) {
                const salt = await bcrypt.genSalt(10);
                entity.password = await bcrypt.hash(entity.password, salt);
                entity.role_id = "61a195c07e76c0a87533f6b4"; //user
                usersDao.insert(entity)
                    .then((user) => {
                        res.status(200).json({ '[Succes]': 'El usuario fue registrado correctamente.' });
                    })
                    .catch((err) => {
                        console.log('[Error] ', err);
                        res.status(500).json({ error: 500, msg: err.msg })
                    })
            } else {
                res.status(400).json({ error: 400, msg: "El usario ya existe" })
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
 * Modifica los datos del usario.
 * 
 * @param {*} req 
 * @param {*} res 
 */
function update(req, res) {
    schemaUserUpdate.validate(req.body)
        .then(async (entity) => {
            usersDao.update(req.params.id, entity)
                .then((user) => {
                    console.log('[entity]', user)
                    res.status(200).json({ '[Succes]': 'El usuario fue modificado correctamente.' });
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
 * Elimina un usario según su id.
 * 
 * @param {*} req 
 * @param {*} res 
 */
export function deleteEntity(req, res) {
    usersDao.deleteEntity(req.params.id)
        .then((user) => {
            console.log('[entity]', user)
            res.status(200).json({ '[Succes]': 'El usuario fue eliminado correctamente.' });
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
    deleteEntity,
}