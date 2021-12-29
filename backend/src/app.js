const express = require('express');
const PORT = require('./config/constants').PORT;
const connectToDatabase = require('./db/database.service');
const tokenRouter = require('./routes').TokenRouter;
const userRouter = require('./routes').UserRouter;
const boardRouter = require('./routes').BoardRouter;

const app = express();

app.use(express.json());

app.use(async (req, res, next) => {
    console.log(`${req.method.toUpperCase()} ${new Date().toLocaleString()}: ${req.path}`);
    next();
});

try {
    connectToDatabase();
    app.use('/api/token', tokenRouter);
    app.use('/api/user', userRouter);
    app.use('/api/board', boardRouter);
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    })
} catch (err) {
    console.error(err);
}