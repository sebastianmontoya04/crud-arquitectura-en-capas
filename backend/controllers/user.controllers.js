const jwt = require('jsonwebtoken');
require('dotenv').config()
const {
    crearUsuarioServices,
    registrarUsersServicios,
    iniciarSesionServicios } = require('../services/user.services')

exports.registrarUsuarios = async (req, res) => {
    try {
        const user = await registrarUsersServicios(req.body);
        res.status(200).json({ msg: 'Usuario registrado con exito', user });
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

exports.iniciarSesion = async (req, res) => {
    try {
        const user = await iniciarSesionServicios(req.body);
        const token = jwt.sign({
            nombre: user.nombre
        },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )
        res.status(200).json({ msg: 'Inicio de sesion exitoso', token })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

exports.crearUsuario = async (req, res) => {
    try {
        const user = await crearUsuarioServices(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};