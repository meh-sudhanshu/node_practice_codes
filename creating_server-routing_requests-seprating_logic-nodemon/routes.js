


function request_listner(req, res){
    const url = req.url
    if(url === '/'){
        res.setHeader("content-type","text/html")
        res.write("hello this is default page")
        res.end()
        return res
    }
    if(url === "/login"){
        res.setHeader("content-type","text/html")
        res.write("hello this is login page")
        res.end()
        return res
    }
}


module.exports = request_listner