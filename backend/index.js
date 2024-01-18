const express = require("express")

const app=express()

const {connection}=require("./db")
const {userRouter}=require("./router/user.router")
const {audiobookRoute} = require("./router/audio.routes")
const {courseRoute} = require("./router/course.route")

const cors=require("cors")

//extras
app.use(express.json())
app.use(cors())
//routes


app.use("/users",userRouter)
app.use("/course",courseRoute)
app.use("/audio",audiobookRoute)



app.listen(8732,async()=>{
  try {
    await connection
    console.log("Server is connected with mongodb") 
  } catch (error) {
    console.log(`Server is not connected with mongodb`)
  }


    console.log(`Server is running at port ${8732}`)
})