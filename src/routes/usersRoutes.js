const express = require('express');
const users = require('../controllers/usersController');

const router = express.Router();

router.get('/get', users.getUsers);
router.get('/get/:user_id', users.getUser);
router.post('/post', users.postUsers);
router.patch('/patch/:user_id', users.patchUser);
router.delete('/delete/:user_id', users.deleteUser);

module.exports = router;