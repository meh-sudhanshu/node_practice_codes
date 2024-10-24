const http = require("http")


const server = http.createServer((req,res)=>{
   
    res.writeHead(200, {
            'Content-Type':'text/html'
    })

    res.write("<h2>Hello i am coming back to you as a response</h2>")
    res.end()

})


server.listen(8081,()=>{
    console.log("server started at port 8081")
})