const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

let PaymentSchema = new Schema({
    playerid: {type: String, required: true},
    date: {type: Date, required: false, default: moment().format('dd-mm-yyyy:hh:mm:ss')},
    paid: {type: Boolean, required: false, default: 0},
});

// Export the model
module.exports = mongoose.model('Payment', PaymentSchema);
