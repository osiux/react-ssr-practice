import React from 'react';
import express, { Request, Response } from 'express';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterProps } from 'react-router';

import App from '@shared/App';

const render = ({ location, context }: StaticRouterProps) => {
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={location} context={context}>
            <App />
        </StaticRouter>
    );
};

export default render;
