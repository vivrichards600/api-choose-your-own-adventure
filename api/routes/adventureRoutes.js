'use strict';
module.exports = function(app) {
    var adventure = require('../controllers/adventureController');

    // adventure Routes
    app.route('/')
        .get(adventure.welcome)

    // adventure Routes
    app.route('/hello')
        .get(adventure.hello)
};