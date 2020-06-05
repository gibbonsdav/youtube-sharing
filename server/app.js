const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)
const chatRoutes = require("./routes/chatroute")
const ioserver = require("./io")

const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", chatRoutes)

//catch error 404 and fwd to error handler
app.use(function (req, res, next) {
  console.log(req.path)
  console.log(404)
  next(createError(404))
})

//error handler
app.use(function (err, req, res, next) {
  //set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  //render the error page
  res.status(err.status || 500)
  res.json({
    status: err.status,
    error: err,
  })
})

ioserver(io)

server.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
