var db = require("../configs/mysql_db");
var Movie = db.movie; // Return the Movie model (Return Table Name i.e., Movies)

// GET all Movies from Movies table.
var getMovies = async (req, res) => {
  const data = await Movie.findAll({});
  res.status(200).json({ data: data });
};

// GET specific Movie from Movies table.
var getMovie = async (req, res) => {
  const data = await Movie.findOne({
    where:{
      movie_id: req.params.movie_id,
    }
  });
  res.status(200).json({ data: data });
};

// ADD data to Movies table (Using API)
var postMovies = async (req,res) => {
  var postData = req.body;
  // If passing more then one data. Add your objects into array then pass it.
  if(postData.length > 1) {
    var data = await Movie.bulkCreate(postData);
  } else { // Always pass without array.
    var data = await Movie.create(postData);
  }

  res.status(200).json({ data: data });
};

// Update specific Movie data in Movies table.
var patchMovie = async(req,res) => {
  var updatedData = req.body;
  const data = await Movie.update(updatedData, {
    where:{
      movie_id: req.params.movie_id,
    }
  });
  res.status(200).json({ data: data });
}

// DELETE specific Movie from Movies table.
var deleteMovie = async(req,res) => {
  const data = await Movie.destroy({
    where:{
      movie_id: req.params.movie_id,
    }
  });
  res.status(200).json({ data: data });
}

module.exports = {
  getMovies,
  getMovie,
  postMovies,
  patchMovie,
  deleteMovie
};