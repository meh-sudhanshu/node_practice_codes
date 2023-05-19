const userRoutes = require("./routes/user")
const defaultRoutes = require("./routes/default")




const express = require("express")
const app = express()


app.use(userRoutes)
app.use(defaultRoutes)


app.listen(8000)
// const server = http.createServer(request_listner)

// server.listen(8000)
