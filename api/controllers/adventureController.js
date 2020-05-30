'use strict';


exports.welcome = function(req, res) {
    // Task.find({}, function(err, task) {
    //     if (err)
    //         res.send(err);
    res.json("Welcome to the 'Choose your own adventure'. Here you will learn how to test APIs your way!");
    // });
};
exports.hello = function(req, res) {
    // Task.find({}, function(err, task) {
    //     if (err)
    //         res.send(err);
        res.json('Oh, hello there!');
    // });
};