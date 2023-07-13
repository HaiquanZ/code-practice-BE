const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');
const commentRouter = require('./routers/commentRouter');
const testRouter = require('./routers/testRouter');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(cors({origin: true, credentials: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = 8000;

app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/comments', commentRouter);
app.use('/compiler', testRouter);
// app.post('/compiler', (req, res) => {
//     var envData = { OS : "windows"};
//     const code = req.body.code;
//     const input = req.body.input;
//     compiler.compilePythonWithInput(envData , code , input , function(data){
//         res.send(data);
//     });  
// })
app.use(errorHandler);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});