(function() {
    'use strict';

    const serveStatic = require('serve-static');
    const path = require('path');

    const root = path.join(__dirname, '../../client/www');
    const options = {
        index: false,
    };

    const assetRouter = serveStatic(root, options);

    module.exports = assetRouter;

})();
