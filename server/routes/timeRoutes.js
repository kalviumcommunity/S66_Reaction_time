const express = require('express');
const router = express.Router();

const timeController = require('../controllers/timeController');

router.post('/add', timeController.postTime);

router.get('/', timeController.getTime);

module.exports = router;