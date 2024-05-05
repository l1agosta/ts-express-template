import express, { Request, Response, Express } from 'express';
let app: Express = express();
let port = 3005;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

let cors = require('cors');
app.use(cors());

app.use(express.json());

app.get(`/`, (req: Request, res: Response) => {
    res.send(`test application with ts + express + nodemon`);
});