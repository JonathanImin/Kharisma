'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Jonathan Hansen Imin\n')
    res.send('52019025\n')
    res.send('Teknik Informatika 2019\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
