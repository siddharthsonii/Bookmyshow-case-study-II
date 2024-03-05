var db = require("../configs/mysql_db");
var User = db.user; // Return the user model (Return Table Name i.e., userName)

// GET all users from users table.
var getUsers = async (req, res) => {
  const data = await User.findAll({});
  res.status(200).json({ data: data });
};

// GET specific user from users table.
var getUser = async (req, res) => {
  const data = await User.findOne({
    where:{
      user_id: req.params.user_id,
    }
  });
  res.status(200).json({ data: data });
};

// ADD data to users table (Using API)
var postUsers = async (req,res) => {
  var postData = req.body;
  // If passing more then one data. Add your objects into array then pass it.
  if(postData.length > 1) {
    var data = await User.bulkCreate(postData);
  } else { // Always pass without array.
    var data = await User.create(postData);
  }

  res.status(200).json({ data: data });
};

// Update specific user data in users table.
var patchUser = async(req,res) => {
  var updatedData = req.body;
  const data = await User.update(updatedData, {
    where:{
      user_id: req.params.user_id,
    }
  });
  res.status(200).json({ data: data });
}

// DELETE specific user from users table.
var deleteUser = async(req,res) => {
  const data = await User.destroy({
    where:{
      user_id: req.params.user_id,
    }
  });
  res.status(200).json({ data: data });
}

module.exports = {
  getUsers,
  getUser,
  postUsers,
  patchUser,
  deleteUser
};