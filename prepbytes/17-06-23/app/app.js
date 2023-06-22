const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static('public'))


app.use(express.urlencoded({extended:true}))




app.get("/search/:id",(req,res,next)=>{
    const id = req.params.id
    res.send(id)
})


app.post("/identify-user",(req,res,next)=>{
    let username = req.query.username
    const password = req.query.password

    res.send({
        "username":username,
        "password":password
    })

    //  username = req.query
})


app.post("/register",(req,res,next)=>{
    const userData = req.body

    const {username} = userData
    const {password} = userData
    res.send([username,password])
})
app.get("/login",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','/static','index.html'))
})

app.use("/next",(req,res,next)=>{
    console.log("next path")
    next()
})
app.get('/next',(req,res,next)=>{
    console.log("next/next executed")
    res.send("next to next executed")
})

app.use('/',(req,res,next)=>{
    console.log("default path")
    res.send("default path acceesed")
})

app.listen(8080)