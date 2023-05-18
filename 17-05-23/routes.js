
const fs = require("fs")


const requestHandler = (req,res)=>{
    const url = req.url
    const body = []
    var message ;
    req.on('data',(chunk)=>{
        body.push(chunk)
        //console.log(parsedBody)
    })
    req.on("end",()=>{  
        if(url === '/message'){
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split("=")[1]
            fs.writeFileSync("message.txt",message)
            res.write("file has been generated")
            return res.end()
        }
        console.log(message)
    })
   
    res.setHeader("content-type" , "text/html")
    res.write("<html>")
        res.write("<head><title>Node trainign</title></head>")
        res.write("<body>")
            res.write("<form action='/message' method='POST'>")
                res.write("<input type='text' placeholder='enter something' name='message'/>")
                res.write("<button type='submit'>Send</button>")
            res.write("</form>")
        res.write("</body>")
    res.write("</html>")

    res.end()

    return res
}


module.exports = requestHandler
