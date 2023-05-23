const path = require("path")


const errorHandler = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","error.html"))
}

module.exports = errorHandler