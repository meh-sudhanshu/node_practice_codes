

const http = require("http")
const fs = require("fs")
const url = require("url")


const server = http.createServer((req,res)=>{

    console.log(req.url)

    const parsedRequestUrl = url.parse(req.url)

    console.log(parsedRequestUrl)
    console.log(parsedRequestUrl.query)
})

server.listen(8081,()=>{
    console.log("server started at port 8081")
})