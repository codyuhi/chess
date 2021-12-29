const express = require('express');
const checkAdmin = require('../middleware').CheckAdmin;
const validUser = require('../middleware').ValidUser;
const TokenController = require('../controllers').TokenController;
const tokenController = new TokenController();

const router = express.Router({
    strict: true
});

// POST requests

router.post('/', (req, res) => {
    tokenController.create(req, res);
});

// GET requests

router.get('/', checkAdmin, (req, res) => {
    tokenController.read(req, res);
});

// DELETE requests

router.delete('/', validUser, (req, res) => {
    tokenController.delete(req, res);
})

module.exports = router