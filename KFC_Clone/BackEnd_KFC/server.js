const express = require("express")
const cors = require("cors")

const {connection} = require("./config/db")
const {foodStureRoute} = require("./routes/foodStructur.routes")
const {authRoute } = require('./routes/UserAuthRoutes')
const { cartRoute } = require("./routes/cartRoute.routes");
const { addressRoute } = require("./routes/addressRoute.routes");
const { paymentRoute } = require("./routes/paymentRoute.routes");
const { authMiddleware } = require("./middleware/auth");

const app = express();
app.use(express.json());
require("dotenv").config();
app.use(cors());

app.use("/kfcApi", foodStureRoute);
app.use("/userApi", authRoute);
app.use("/cartApi", authMiddleware, cartRoute);
app.use("/addressApi", authMiddleware, addressRoute);
app.use("/paymentApi", authMiddleware, paymentRoute);
let PORT = process.env.PORT
app.listen(PORT , async()=>{
   try{
    await connection;
    console.log(`Server is running on the port ${PORT}`)
   }catch(error){
    console.log(error)
   }
});
