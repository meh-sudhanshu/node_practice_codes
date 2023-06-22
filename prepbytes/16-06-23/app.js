const express = require('express')
const http = require('http')

const app = express()


app.use('/registrterUser',(req, res, next)=>{
    console.log("default path has been accessed")
})


app.listen(3000)

// const server = http.createServer(app)

// server.listen(3000)


// app.listen(8080)


// npm install --save express

