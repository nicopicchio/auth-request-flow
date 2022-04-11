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

const secretKey = 'superSecret';

router.post('/login', (req, res) => {
	res.json(jwt.sign({ username: mockUser.username }, secretKey));
});

router.get('/profile', (req, res) => {
	try {
		const token = req.headers.authorization.substring(7);
		jwt.verify(token, secretKey);
		res.status(200).json({ profile: mockUser.profile });
	} catch (err) {
		res.status(401).json('Who are you?');
	}
});

module.exports = router;
