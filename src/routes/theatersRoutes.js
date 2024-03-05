const express = require('express');
const theaters = require('../controllers/theatersController');

const router = express.Router();

router.get('/get', theaters.getTickets);
router.get('/get/:theater_id', theaters.getTicket);
router.post('/post', theaters.postTickets);
router.patch('/patch/:theater_id', theaters.patchTicket);

module.exports = router;