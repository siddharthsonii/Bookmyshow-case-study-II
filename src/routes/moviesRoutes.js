const express = require('express');
const movies = require('../controllers/moviesController');

const router = express.Router();

router.get('/get', movies.getMovies);
router.get('/get/:movie_id', movies.getMovie);
router.post('/post', movies.postMovies);
router.patch('/patch/:movie:id', movies.patchMovie);
router.delete('/delete/:movie_id', movies.deleteMovie);

module.exports = router;