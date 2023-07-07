const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: true, credentials: true}));
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});