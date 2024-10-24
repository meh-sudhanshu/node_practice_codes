



const http = require('http')
const average = require("./findAverage")

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    const avg = average(10,20,30)
    res.write("<h1>Hello i am coming from node app </h1>")
    res.write(`<h1>The avegare is ${avg}</h1>`)
    res.end()
})

server.listen(8080,()=>{
    console.log("server started at port 8080")
})