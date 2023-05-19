const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const adminRoutes = require("./routes/admin")
const userRoutes = require("./routes/user")


app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRoutes)
app.use(userRoutes)

app.listen(8000)