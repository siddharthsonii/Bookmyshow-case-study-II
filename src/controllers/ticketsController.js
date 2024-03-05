var db = require("../configs/mysql_db");
var Ticket = db.ticket; // Return the Ticket model (Return Table Name i.e., Tickets)

// GET all Tickets from Tickets table.
var getTickets = async (req, res) => {
  const data = await Ticket.findAll({});
  res.status(200).json({ data: data });
};

// GET specific Ticket from Tickets table.
var getTicket = async (req, res) => {
  const data = await Ticket.findOne({
    where:{
      ticket_id: req.params.ticket_id,
    }
  });
  res.status(200).json({ data: data });
};

// ADD data to Tickets table (Using API)
var postTickets = async (req,res) => {
  var postData = req.body;
  // If passing more then one data. Add your objects into array then pass it.
  if(postData.length > 1) {
    var data = await Ticket.bulkCreate(postData);
  } else { // Always pass without array.
    var data = await Ticket.create(postData);
  }

  res.status(200).json({ data: data });
};

// Update specific Ticket data in Tickets table.
var patchTicket = async(req,res) => {
  var updatedData = req.body;
  const data = await Ticket.update(updatedData, {
    where:{
      ticket_id: req.params.ticket_id,
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