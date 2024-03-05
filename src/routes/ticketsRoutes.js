const express = require('express');
const tickets = require('../controllers/ticketsController');

const router = express.Router();

router.get('/get', tickets.getTickets);
router.get('/get/:ticket_id', tickets.getTicket);
router.post('/post', tickets.postTickets);
router.patch('/patch/:ticket_id', tickets.patchTicket);

module.exports = router;