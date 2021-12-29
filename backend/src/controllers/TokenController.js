// TODO: Implement controller functionality
class TokenController {
    async create(req, res) {
        res.status(201);
        res.json({
            success: true,
            message: 'Successfully logged in',
            data: {
                token: null
            }
        })
    }

    async read(req, res) {
        res.status(200);
        res.json({
            success: true,
            message: 'Successfully retrieved all tokens',
            data: {
                tokens: []
            }
        })
    }

    async delete(req, res) {
        res.status(204);
        res.json({
            success: true,
            message: 'Successfully logged out'
        })
    }
};

module.exports = TokenController