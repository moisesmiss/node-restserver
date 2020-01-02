require('./config/config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
app.get('/', function (req, res) {
  res.json('Hello World')
})

app.post('/user', function(req, res){
    let body = req.body
    if(body.nombre === undefined){
        res.status(400).send({
            message: 'Bad Request, field name cannot be empty'
        });
    }
    res.json(body)
})

app.put('/user/:id', function(req, res){
    let id = req.params.id
    res.json({
        id,
    })
})
 
app.listen(process.env.PORT, () => {
    console.log('listen port', process.env.PORT)
})