const express = require("express")

const userRoutes = require("./routes/user")
const adminRoutes = require("./routes/admin")



const app = express()

app.use(userRoutes)
app.use(adminRoutes)


app.listen(8000)