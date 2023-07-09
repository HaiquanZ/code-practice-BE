const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');
const errorHandler = require('./middlewares/errorHandler')

const app = express();
app.use(cors({origin: true, credentials: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = 8000;

app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});