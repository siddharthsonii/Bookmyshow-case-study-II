var db = require("../configs/mysql_db");
var Theater = db.theater; // Return the Theater model (Return Table Name i.e., Theaters)

// GET all Theaters from Theaters table.
var getTickets = async (req, res) => {
  const data = await Theater.findAll({});
  res.status(200).json({ data: data });
};

// GET specific Theater from Theaters table.
var getTicket = async (req, res) => {
  const data = await Theater.findOne({
    where:{
      theater_id: req.params.theater_id,
    }
  });
  res.status(200).json({ data: data });
};

// ADD data to Theaters table (Using API)
var postTickets = async (req,res) => {
  var postData = req.body;
  // If passing more then one data. Add your objects into array then pass it.
  if(postData.length > 1) {
    var data = await Theater.bulkCreate(postData);
    console.log(data)
  } else { // Always pass without array.
    var data = await Theater.create(postData);
    console.log(data)
  }

  res.status(200).json({ data: data });
};

// Update specific Theater data in Theaters table.
var patchTicket = async(req,res) => {
  var updatedData = req.body;
  const data = await Theater.update(updatedData, {
    where:{
      theater_id: req.params.theater_id,
    }
  });
  res.status(200).json({ data: data });
}

module.exports = {
  getTickets,
  getTicket,
  postTickets,
  patchTicket
};