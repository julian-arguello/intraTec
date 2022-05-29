export function isSuperAdmin(req, res, next) {
    const user = req.user;
    if (user.role.role_name !== 'super_admin') {
        return res.status(400).json({error: 400, msg: "[Error] No tiene acceso de super administrador."})
    }
    next()
}