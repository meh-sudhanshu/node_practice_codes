const path = require("path")


const loginHandler = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","login.html"))
}

module.exports = loginHandler