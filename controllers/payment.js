//payment
const Payment = require('../models/payment');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.payment_create = function (req, res) {
    let payment = new Payment(
        {
            playerid: req.body.playerid,
            date: req.body.date,
            paid: req.body.paid
        }
    );

    payment.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Payment Created successfully')
    })
};

exports.payment_details = function (req, res) {
    Payment.findById(req.params.id, function (err, payment) {
        if (err) return next(err);
        res.send(payment);
    })
};

exports.payment_update = function (req, res) {
    Payment.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, payment) {
        if (err) return next(err);
        res.send('Payment udpated.');
    });
};

exports.payment_delete = function (req, res) {
    Payment.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};