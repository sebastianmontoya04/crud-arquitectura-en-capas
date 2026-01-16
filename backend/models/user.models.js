const db = require('../databases/server.js')

exports.crearUsuarioModels = async (nombre) => {
    const result = await db.query('INSERT INTO usuarios (nombre) VALUES ($1) RETURNING *',
        [nombre]
    )
    return result.rows[0];
}