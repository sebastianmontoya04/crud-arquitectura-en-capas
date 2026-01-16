const { crearUsuarioServices } = require('../services/user.services')

exports.crearUsuario = async (req, res) => {

    try {
        const user = await crearUsuarioServices(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};
