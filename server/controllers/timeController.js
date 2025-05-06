const Time = require("../models/timeModel");

const getTime = async (req, res) => {
  try {
    const allTimes = await Time.find();
    res.status(200).send(allTimes);
  } catch (err) {
    res.status(500).send({ message: "Error retrieving Time", error: err.message });
  }
};

const postTime = async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const { time, player } = req.body;
    const newTime = new Time({ time, name: player || "Anonymous" }); 
    await newTime.save();
    res.status(201).json(newTime);
  } catch (err) {
    console.error("POST error:", err);
    res.status(500).json({ message: "Failed to add time", error: err.message });
  }
};

module.exports = { getTime, postTime };
