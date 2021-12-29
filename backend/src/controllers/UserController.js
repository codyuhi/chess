// TODO: Implement controller functionality
class UserController {
    async create(req, res) {
        res.status(201)
        res.json({
            success: true,
            message: 'Successfully created new user',
            data: {
                user: null,
                token: null
            }
        })
    }

    async read(req, res) {
        res.status(200)
        res.json({
            success: true,
            message: 'Successfully retrieved data for all users',
            data: {
                users: []
            }
        })
    }

    async readByUserId(req, res) {
        res.status(200)
        res.json({
            success: true,
            message: `Successfully retrieved data for user with id '${req.params.userId}'`,
            data: {
                user: null
            }
        })
    }

    async updateByUserId(req, res) {
        res.status(200)
        res.json({
            success: true,
            message: `Successfully updated user for user with id '${req.params.userId}'`,
            data: {
                user: null
            }
        })
    }

    async delete(req, res) {
        res.status(204)
        res.json({
            success: true,
            message: 'Successfully deleted all users data'
        })
    }

    async deleteByUserId(req, res) {
        res.status(204)
        res.json({
            success: true,
            message: `Successfully deleted user with id '${req.params.userId}'`
        })
    }
};

module.exports = UserController