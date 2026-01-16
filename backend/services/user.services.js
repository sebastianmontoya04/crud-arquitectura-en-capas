const { crearUsuarioModels } = require('../models/user.models')

exports.crearUsuarioServices = async ({ nombre }) => {
    if (!nombre) {
        throw new Error('El nombre es obligatorio');
    }
    const usuario = await crearUsuarioModels(nombre)
    return usuario;

};