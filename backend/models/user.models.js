const db = require('../databases/server.js')

exports.crearUsuarioModels = async ( nombre ) => {
    const result = await db.query('INSERT INTO usuarios (nombre) VALUES ($1) RETURNING *',
        [nombre]
    )
    return result.rows[0];
};
exports.registrarUsersModels = async ( nombre, hashedPassword ) => {
    const result = await db.query('INSERT INTO admin (nombre, password) VALUES ($1, $2) RETURNING *',
        [nombre, hashedPassword]
    )
    return result.rows[0]
}
exports.iniciarSesionModels = async ( nombre ) => {

    const result = await db.query('SELECT * FROM admin WHERE nombre = $1',
        [nombre]
    )
    return result.rows[0]

}