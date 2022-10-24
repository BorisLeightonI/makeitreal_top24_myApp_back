// require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { connect } = require("./database")
const { auth } = require("./utils/auth")
const userRouter = require("./api/routes/user.routes")
const User = require("./api/models/user.model")
const { routes } = require("./routes")
const path = require('path')

const port = process.env.PORT;
const app = express()
connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

routes(app);

app.listen(port, () => {
  console.log(`App running on port: ${port}`)
})