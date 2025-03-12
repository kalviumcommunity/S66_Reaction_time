const mongoose = require('mongoose')

const timeSchema = new mongoose.Schema({

   time: {
       type: String,
       required: true
   },

   player: {
       type: String,
       default: "Anonymous"
   }
   
})

module.exports = mongoose.model("time",timeSchema)