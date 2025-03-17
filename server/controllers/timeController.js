const Time = require("../models/timeModel")

const getTime = async(req,res)=>{
    try{
        const allTimes = await Time.find()
        res.status(200).send(allTimes)
    }catch(err){
        res.status(500).send({message: "Error retrieving Time", error: err.message})
    }
}

const postTime = async (req, res) => {
    try {
      const newTime = new Time(req.body);
      await newTime.save();
      res.status(201).json(newTime);
    } catch (err) {
      console.error("POST error:", err);
      res.status(500).json({ message: "Failed to add excuse", error: err.message });
    }
  };


module.exports = {getTime, postTime};