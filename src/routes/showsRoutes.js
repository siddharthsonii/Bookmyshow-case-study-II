const express = require('express');
const shows = require('../controllers/showsController');

const router = express.Router();

router.get('/get', shows.getShows);
router.get('/get/:show_id', shows.getShow);
router.post('/post', shows.postShows);
router.patch('/patch/:show_id', shows.patchShow);
// router.delete('/delete/:show_id', shows.deleteShow);
// ----------------------------------
// router.get('/get/:theater_id', shows.getShowsController)

module.exports = router;

// Delete shows from other tables too if deleting from main shows table.