'use strict';

exports.welcome = function(req, res) {
    res.json("Welcome to the 'Choose your own adventure'. Here you will learn how to test APIs your way!");
};

exports.hello = function(req, res) {
        res.json('Oh, hello there!');
};