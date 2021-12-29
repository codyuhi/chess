// TODO: Implement controller functionality
class BoardController {
    async create(req, res) {
        res.status(201);
        res.json({
            success: true,
            message: 'Successfully created new board',
            data: {
                board: null
            }
        })
    }

    async read(req, res) {
        res.status(200)
        res.json({
            success: true,
            message: 'Successfully retrieved all board data',
            data: {
                boards: []
            }
        })
    }

    async readByBoardId(req, res) {
        res.status(200)
        res.json({
            success: true,
            message: `Successfully retrieved board data for board with id '${req.params.boardId}'`,
            data: {
                board: null
            }
        })
    }

    async updateByBoardId(req, res) {
        res.status(200)
        res.json({
            success: true,
            message: `Successfully updated board for board with id '${req.params.boardId}'`,
            data: {
                board: null
            }
        })
    }

    async delete(req, res) {
        res.status(204)
        res.json({
            success: true,
            message: 'Successfully deleted all boards'
        })
    }

    async deleteByBoardId(req, res) {
        res.status(204)
        res.json({
            success: true,
            message: `Successfully deleted board with id '${req.params.boardId}'`
        })
    }
};

module.exports = BoardController