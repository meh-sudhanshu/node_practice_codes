var http = require('http')

var fs = require('fs')

function requestListner(req, res){
    const url = req.url;
    //console.log(req)
    const requestBody = []
    if(url === '/message'){

        req.on('data',(chunk)=>{
            requestBody.push(chunk)
        })

        req.on('end',()=>{
            const parsedBody = Buffer.concat(requestBody).toString()
            const data = parsedBody.split("=")[1]
            //console.log(parsedBody)
            fs.writeFileSync('message.txt',data)
        })

        
    }
    if(url === '/'){
        res.write("<html>")
            res.write("<head><title>Welcome to node trainig</title></head>")
            res.write("<body><h2>Hello, feel free to ask doubts</h2></body>")
        res.write("</html>")
        return res.end()
    }
    if(url === '/login'){
        res.write("<html>")
            res.write("<head><title>Welcome to node trainig</title></head>")
            res.write("<body>")
                res.write("<form action='/message' method='POST'>")
                    res.write("<input placehoder='Enter Keyword' name='userInput'>")
                    res.write("<button type='submit'>Login</button>")
                res.write("</form>")
            res.write("</body>")
        res.write("</html>")

        return res.end()
    }
    res.write("default logic")
    res.end()
}


const server = http.createServer(requestListner)

server.listen(3000)


 // res.write("hello, welcome to node trainign by prepbytes")
    // res.end()


    //const url = req.url

    // if(url === '/'){
    //     console.log("default url is being excuted")
    // }else{
    //     console.log("some other url is coming into url")
    // }


    //console.log(req.method, req.headers)
    //process.exit()


