const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middlewares/verificarToken')
const {
    crearUsuario,
    registrarUsuarios,
    iniciarSesion } = require('../controllers/user.controllers');

router.post('/crearUsuarios', verificarToken, crearUsuario );
router.post('/registrarUsuarios', registrarUsuarios);
router.post('/iniciarSesion', iniciarSesion);


module.exports = router;