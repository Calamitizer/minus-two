(function() {
    'use strict';

    // require('dotenv').config();

    const express = require('express');
    const morgan = require('morgan');
    const bodyParser = require('body-parser');
    const compression = require('compression');

    const path = require('path');
    // const http = require('http');

    // const apiRouter = require('../routers/api.v1.js');
    const assetRouter = require('../routers/asset.js');
    const navRouter = require('../routers/nav.js');

    const port = process.env.MTWO_PORT || 4345; // "+-"

    const mTwo = express();

    mTwo
        // .set('port', port)
        .use(morgan('dev'))
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({
            extended: true,
        }))
        .use(compression())
        // .use('/api/v1', apiRouter)
        .use('/', assetRouter)
        .use('/', navRouter);

        mTwo.set('port', port);
        // const server = http.createServer(mTwo);

        mTwo.listen(mTwo.get('port'), () => {
            console.log(`(++--) server listening on port ${mTwo.get('port')}`);
        });

})();
