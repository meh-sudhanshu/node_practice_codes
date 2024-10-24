const http = require("http")
const fs = require('fs')

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    const path = req.url
    if(path === "/"){
        try {
            const data = fs.readFileSync("./views/homepage.html")
            res.write(data)
        } catch (err) {
            console.log(err)
        }
    }else if(path === "/login"){
        try {
            const data = fs.readFileSync("./views/login.html")
            res.write(data)
        } catch (err) {
            console.log(err)
        }
    }else if(path === "/service"){
        try {
            const data = fs.readFileSync("./views/services.html")
            res.write(data)
        } catch (err) {
            console.log(err)
        }
    }else{
        res.write("<h2>Path does nt exist !!</h2>")
    }
    res.end()

})


server.listen(8083, () => {
    console.log("server started at port 8083")
})