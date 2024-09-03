const express = require('express');
const router = express.Router();
const mlEventUserController = require('../controllers/mlEventUserAuth'); 

router.post('/register', mlEventUserController.registerUser);
router.get('/teams', mlEventUserController.getAllTeams);
router.post('/login', mlEventUserController.loginUser);

module.exports = router;
