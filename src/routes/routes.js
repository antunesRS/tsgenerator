const express = require('express')
const path = require('path')
const generator = require('../generator')

module.exports = server => {
    const router = express.Router()

    router.get('/', (_,res) => {
        const indexPath = path.join(__dirname, '../../public/html', 'index.html')
        res.sendFile(indexPath)
    })

    router.post('/generate', (req,res) => {
        try{
            const formData = req.body
            const responseData = generator(formData)
            res.json(responseData)
        }
        catch{
            res.status(500).send({ error: 'Internal Server Error' });
        }
    })

    server.use('/generator', router)
}