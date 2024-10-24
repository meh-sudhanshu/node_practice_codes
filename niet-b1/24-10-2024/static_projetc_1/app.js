

const http = require("http")
const fs = require("fs")
const url = require("url")


const server = http.createServer((req,res)=>{

    console.log(req.url)
    const path = req.url
    if(path === "/"){

        const data = fs.readFileSync("./views/homepage.html")
        res.write(data)
        console.log("homepage")
        res.end()
    }else if(path === "/login"){
        console.log("login")
    }else if(path === "/services"){
        console.log("servces")
    }else{
        console.log("error page")
    }

    const parsedRequestUrl = url.parse(req.url)

    console.log(parsedRequestUrl)
    console.log(parsedRequestUrl.query)
})

server.listen(8082,()=>{
    console.log("server started at port 8082")
})