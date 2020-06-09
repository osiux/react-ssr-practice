import React from 'react';
import express, { Request, Response } from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';

import App from '@shared/App';

const PORT = process.env.PORT || 4000;

const app = express();

app.get('/*', (req: Request, res: Response) => {
    res.send(
        JSON.stringify({
            hello: 'world',
        })
    );
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});
