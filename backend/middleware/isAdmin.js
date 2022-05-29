export function isAdmin(req, res, next) {
    const user = req.user;
    if (user.role.role_name !== 'admin') {
        return res.status(400).json({error: 400, msg: "[Error] No tiene acceso administrador."})
    }
    next()
}



