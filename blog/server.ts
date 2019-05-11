import * as express from 'express';
import * as next from 'next';

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare().then(async () => {
    const server = express();

    server.use(express.static('static'));

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err: any) => {
        if (err) throw err

        console.info(`NextJS is ready via Express server on http://localhost:${port}`);
    })
});
