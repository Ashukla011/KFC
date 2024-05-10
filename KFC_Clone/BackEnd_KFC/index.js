const http= require('http')
const fs=require('fs')
const express = require("express")
const app = express()
const {KfcMenuRoute} = require("./routes/KfcMenu.routes")
const cors = require("cors")
const {connection} = require("./config/db")
app.use(express.json())
 require("dotenv").config()
app.use(cors())


app.use("/kfc",KfcMenuRoute)

let PORT = process.env.port|| 3500
app.listen(PORT , async()=>{
   try{
    await connection,
    console.log(`Server is running on the port ${PORT}`)
   }catch(error){
    console.log(error)
   }
});
