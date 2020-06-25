//  --- express js route ---

const express   = require('express')
const app       = express()


app.get('/', function(req, res) {
    res.send('Halo Dunia')
})

app.get('/users/:name', function(req, res){
    res.send(`Halaman user ${req.params.name}`)
})

app.listen(3000);