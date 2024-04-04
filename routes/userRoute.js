const express = require('express');
const router = express.Router();

const getUsers = require('../controllers/userController');

router.get('/user', getUsers);

module.exports = router;
