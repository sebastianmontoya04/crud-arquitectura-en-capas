const express = require('express');
const cors = require('cors');
require('dotenv').config()
require('./databases/server')

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Api en funcionamiento')
})

app.use('/api', require('./routes/user.routes'))

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http:localhost: ${PORT}`)
})


