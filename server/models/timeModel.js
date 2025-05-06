const mongoose = require('mongoose')

const timeSchema = new mongoose.Schema({

   time: {
       type: String,
       required: true
   },

   name: {
       type: String,
       default: "Anonymous"
   }
   
})

module.exports = mongoose.model("Time",timeSchema)