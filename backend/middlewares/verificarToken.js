const jwt = require('jsonwebtoken');

exports.verificarToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // 1. Validar que exista el header
    if (!authHeader) {
        return res.status(401).json({
            msg: 'Token no proporcionado'
        });
    }

    // 2. Validar formato Bearer TOKEN
    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
        return res.status(401).json({
            msg: 'Formato de token inválido'
        });
    }

    // 3. Verificar token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 4. Inyectar usuario en el request
        req.user = decoded;

        // 5. Continuar flujo
        next();
    } catch (error) {
        return res.status(401).json({
            msg: 'Token inválido o expirado'
        });
    }
};
