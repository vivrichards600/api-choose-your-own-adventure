'use strict';
module.exports = function(app) {
    var adventure = require('../controllers/adventureController');

    // default routes
    app.route('/')
        .get(adventure.welcome)

    // start adventure
    app.route('/hello')
        .get(adventure.hello)
};