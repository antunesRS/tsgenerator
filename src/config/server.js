const express = require('express')
const server = express();
const bodyParser = require('body-parser')
const path = require('path')

const PORT = (process.env.PORT || 3000)

server.use(express.static(path.join(__dirname, '../../public')))
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())


server.get('/', (_, res) => {
    res.redirect('/generator')
})

server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

module.exports = server