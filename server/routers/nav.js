(function() {
    'use strict';

    const express = require('express');
    const path = require('path');

    const root = path.join(__dirname, '../../client/www');

    const navRouter = express.Router()
        .use((req, res, next) => {
            console.log(`
                Site request made.
                Base: ${req.baseUrl}
                Original: ${req.originalUrl}
                Url: ${req.Url}
            `);
            next();
        })
        .get('*', (req, res) => {
            res
                .status(200)
                .sendFile('/index.html', {
                    root,
                });
        });

    module.exports = navRouter;

})();
