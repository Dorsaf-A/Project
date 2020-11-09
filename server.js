const express = require("express");

const connectDB = require("./config/connectDB")

const app = express();

const authRouter = require("./routes/auth")
const clubRouter = require("./routes/club")
const evntRouter = require("./routes/event")
const teacherRouter = require("./routes/teacher")
const serviceRouter = require("./routes/service")
const studentRouter = require("./routes/student")

connectDB()

//middleware
app.use(express.json())



//routes-middleware
app.use("/api/auth",authRouter)
app.use("/api/club",clubRouter)
app.use("/api/event",evntRouter)
app.use("/api/teacher",teacherRouter)
app.use("/api/service",serviceRouter)
app.use("/api/student",studentRouter)


const port = process.env.PORT || 5000;

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`the server is running on ${port}`)
);
