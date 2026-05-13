const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    trace_id: {
        type: String,
        required: true
    },

    service: {
        type: String,
        required: true
    },

    event: {
        type: String,
        required: true
    },

    parent_event: {
        type: String,
        default: null
    },

    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Event', eventSchema);
