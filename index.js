const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var url = require('url')
const port = 8000
const app = express()
const jsonProva = {name: 'tizio', age: '43'}


app.get('/user',function(req,res){
	res.json({
        name: 'Mike', 
        age: '41',
        url: req.headers.host+req.url
    })
})
app.listen(port, ()=>{console.log(`listening on port ${port}`)})