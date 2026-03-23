
const mongoose = require("mongoose")
require('dotenv').config()

const connection=mongoose.connect(process.env.mongoDBURL)
      .then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(err));

      module.exports={connection}