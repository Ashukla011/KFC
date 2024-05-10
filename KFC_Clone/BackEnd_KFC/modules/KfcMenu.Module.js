 const mongoose = require("mongoose")
const KfcMenuScheema = new mongoose.Schema({
  name:String,
  description:String,
  image:String,
  price:Number,
  icon:String,
  type:String,
  foodType:String,
  quantity:Number

})
const KfcMenuModel = mongoose.model('task', KfcMenuScheema);

module.exports ={KfcMenuModel}
