const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const mockUser = {
	username: 'authguy',
	password: 'mypassword',
	profile: {
		firstName: 'Chris',
		lastName: 'Wolstenholme',
		age: 43,
	},
};

router.post('/login', (req, res) => {
	
});

router.get('/profile', (req, res) => {
	res.json(mockUser);
});

module.exports = router;
