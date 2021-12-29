const express = require('express');
const checkAdmin = require('../middleware').CheckAdmin;
const validUser = require('../middleware').ValidUser;
const BoardController = require('../controllers').BoardController;
const boardController = new BoardController();

const router = express.Router({
    strict: true
});

// POST requests

router.post('/', validUser, (req, res) => {
    boardController.create(req, res);
});

// GET requests

router.get('/', checkAdmin, (req, res) => {
    boardController.read(req, res);
});

router.get('/:boardId', validUser, (req, res) => {
    boardController.readByBoardId(req, res);
})

// PUT requests

router.put('/:boardId', validUser, (req, res) => {
    boardController.updateByBoardId(req, res);
})

// DELETE requests

router.delete('/', checkAdmin, (req, res) => {
    boardController.delete(req, res);
})

router.delete('/:boardId', validUser, (req, res) => {
    boardController.deleteByBoardId(req, res);
})

module.exports = router