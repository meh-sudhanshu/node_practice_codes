const express = require("express")

const app = express()
const publicRoutes = require("./routes/public/default")


app.use(publicRoutes)


app.listen(8000)