var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model("customerDetails", {
    BookingContacts: {
        type: Object,
        default: {}
    },
    BookingStatus: {
        type: String,
        default: ''
    },
    "PNR": {
        type: String,
        default: ''
    },
    BookingPassengers: {
        type: Object,
        default: {}
    },
    JourneryServices: {
        type: Object,
        default: {}
    },
    created_at: {
        type: Date
    }

}, "customerDetails");
