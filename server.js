//  --- express js route ---

const express   = require('express')
const app       = express()
const port      = 3000


app.get('/', (req, res) => 
    res.send('Halo Dunia')
)

app.get('/users/:name', function(req, res){
    res.send(`Halaman user ${req.params.name}`)
})

app.listen(port, ()=> console.log(`Buka url di local 127.0.0.1:${port}`));