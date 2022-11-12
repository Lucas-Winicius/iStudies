const express = require('express')
const upload = require('express-fileupload')

const app = express()

app.use(express.static('.'))
app.use(upload())

app.post('/sendPost', (req, res) => {
    if(req.files) {
        console.log(req.files)
        res.send('Arquivo enviado')
    }
})

app.listen(5000, () => console.log('Server Ativo!'))