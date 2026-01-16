require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
    connectionString: process.env.DB_URL,
    ssl: process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false } : false
})

pool.connect()
    .then(() => console.log('Conectado a postgres'))
    .catch(err => console.log(`Error al conectar con postgres ${err}`))

module.exports = pool