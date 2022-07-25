export function authEdit(req, res, next) {
    const user = req.user;
    console.log("status", (user.role.role_name !== 'super_admin' ))
    if ( req.body._id != user._id || (user.role.role_name == 'super_admin' && req.body._id != user._id)) {
        return res.status(400).json({error: 400, 'status':'error', msg: "No tiene acceso de super administrador."})
    }
    next()
}