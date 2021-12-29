const express = require('express');
const checkAdmin = require('../middleware').CheckAdmin;
const validUser = require('../middleware').ValidUser;
const UserController = require('../controllers').UserController;
const userController = new UserController();

const router = express.Router({
    strict: true
});

// POST requests

router.post('/', (req, res) => {
    userController.create(req, res);
});

// GET requests

router.get('/', checkAdmin, (req, res) => {
    userController.read(req, res);
});

router.get('/:userId', validUser, (req, res) => {
    userController.readByUserId(req, res);
})

// PUT requests

router.put('/:userId', validUser, (req, res) => {
    userController.updateByUserId(req, res);
})

// DELETE requests

router.delete('/', checkAdmin, (req, res) => {
    userController.delete(req, res);
})

router.delete('/:userId', validUser, (req, res) => {
    userController.deleteByUserId(req, res);
})

module.exports = router