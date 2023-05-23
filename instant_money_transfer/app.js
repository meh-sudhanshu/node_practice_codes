const express = require("express")
const defaultRoutes = require("./routes/default")
const errorRoutes = require("./routes/error")

const app = express()


app.use(errorRoutes)
app.use(defaultRoutes)

app.listen(8000)