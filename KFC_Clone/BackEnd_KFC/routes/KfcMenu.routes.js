const express = require("express");
const {KfcMenuModel} = require("../modules/KfcMenu.Module");
const KfcMenuRoute = express.Router();
const cors = require("cors");
const app = express();
app.use(cors());

KfcMenuRoute.get("/Menu", cors(), async (req, res) => {
  try {
    let data = await KfcMenuModel.find();
    res.send(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

KfcMenuRoute.post("/Menuadd", async (req, res) => {
  try {
    const { name,price,image,description,type,icon,foodType,quantity} = req.body;
    const task = new  KfcMenuModel({ name,price,image,description,type,icon,foodType,quantity });
    await task.save();
   
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// Search By titel description price and orther things
KfcMenuRoute.get("/filterType", cors(), async (req, res) => {
  const { foodType } = req.query;
  try {
    let data = await KfcMenuModel.find({
      foodType: { $regex: foodType, $options: "i" },
    });
    res.send(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// KfcMenuRoute.get("/filter",(req,res)=>{
//     const filters = req.query; 
//   const filteredUsers = new KfcMenuModel.filter(user => { 
//     let isValid = true; 
//     for (key in filters) { 
//       console.log(key, user[key], filters[key]); 
//       isValid = isValid && user[key] == filters[key]; 
//     } 
//     return isValid; 
//   }); 
//   res.send(filteredUsers); 
// })
module.exports = { KfcMenuRoute };
