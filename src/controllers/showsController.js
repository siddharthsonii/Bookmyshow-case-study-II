var db = require("../configs/mysql_db");
var Show = db.show; // Return the Show model (Return Table Name i.e., Shows)

// GET all Shows from Shows table.
var getShows = async (req, res) => {
  const data = await Show.findAll({});
  res.status(200).json({ data: data });
};

// GET specific Show from Shows table.
var getShow = async (req, res) => {
  const data = await Show.findOne({
    where:{
      show_id: req.params.show_id,
    }
  });
  res.status(200).json({ data: data });
};

// ADD data to Shows table (Using API)
var postShows = async (req,res) => {
  var postData = req.body;
  // If passing more then one data. Add your objects into array then pass it.
  if(postData.length > 1) {
    var data = await Show.bulkCreate(postData);
  } else { // Always pass without array.
    var data = await Show.create(postData);
  }

  res.status(200).json({ data: data });
};

// Update specific Show data in Shows table.
var patchShow = async(req,res) => {
  var updatedData = req.body;
  const data = await Show.update(updatedData, {
    where:{
      show_id: req.params.show_id,
    }
  });
  res.status(200).json({ data: data });
}

// DELETE specific user from users table.
// var deleteShow = async(req,res) => {
//   const data = await Show.destroy({
//     where:{
//       show_id: req.params.show_id,
//     }
//   });
//   res.status(200).json({ data: data });
// }

module.exports = {
  getShows,
  getShow,
  postShows,
  patchShow,
  // deleteShow
};