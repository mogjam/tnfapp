const Player = require('../models/player');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.player_create = function (req, res) {
    let player = new Player(
        {
            name: req.body.name
        }
    );

    player.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Player Created successfully')
    })
};

exports.player_details = function (req, res) {
    Player.findById(req.params.id, function (err, player) {
        if (err) return next(err);
        res.send(player);
    })
};

exports.player_update = function (req, res) {
    Player.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, player) {
        if (err) return next(err);
        res.send('Player udpated.');
    });
};

exports.player_delete = function (req, res) {
    Player.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};