const bcrypt = require('bcrypt')
const { 
    crearUsuarioModels,
    registrarUsersModels,
    iniciarSesionModels } = require('../models/user.models')

exports.crearUsuarioServices = async ({ nombre }) => {
    if (!nombre) {
        throw new Error('Usuario no encontrado');
    }
    return await crearUsuarioModels(nombre);
};

exports.registrarUsersServicios = async ({ nombre, password }) => {
    if (!nombre || !password) {
        throw new Error('El nombre y contraseña son obligatorios');
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    return await registrarUsersModels(nombre, hashedPassword);
};

exports.iniciarSesionServicios = async ({ nombre, password }) => {
    if (!nombre || !password) {
        throw new Error('Nombre y contraseña son obligatorio');
    }
    const usuario = await iniciarSesionModels(nombre)
    if(!usuario){
        throw new Error('Usuario no encontrado')
    }
    const compararPassword = await bcrypt.compare(password, usuario.password);
    if (!compararPassword) {
        throw new Error('La contraseña es incorrecta')
    }
    return usuario;
}