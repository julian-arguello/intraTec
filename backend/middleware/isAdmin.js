export function isAdmin(req, res, next) {
    const user = req.user;
    switch (user.role.role_name){
        case 'admin':
        case 'super_admin':
            next()
            break;
        default:
            return res.status(400).json({error: 400, msg: "[Error] No tiene acceso administrador."})
    }


   
}



