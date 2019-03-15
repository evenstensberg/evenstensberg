import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../../client/src/app';

const router = express.Router();

router.get('/', (req, res) => {

  const context = {};

  const html = ReactDOMServer.renderToString(
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <App />
      </StaticRouter>
  ,
  );


  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.status(200).render('../views/index.ejs', {
      html,
      script: JSON.stringify({}),
    });
  }
});


export default router;
