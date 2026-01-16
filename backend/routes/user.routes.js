const express = require('express');
const router = express.Router();

const { crearUsuario } = require('../controllers/user.controllers')

router.post('/crearUsuarios', crearUsuario);

module.exports = router