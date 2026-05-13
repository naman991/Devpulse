const Event = require('../models/Event');


// CREATE EVENT
exports.createEvent = async (req, res) => {

    try {

        const event = await Event.create(req.body);

        res.status(201).json({
            success: true,
            data: event
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};


exports.getTrace = async (req, res) => {

    try {

        const traceId = req.params.traceId;

        const events = await Event.find({
            trace_id: traceId
        }).sort({ timestamp: 1 });

        res.status(200).json({
            success: true,
            trace_id: traceId,
            total_events: events.length,
            events
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};

exports.getEvents = async (req, res) => {

    try {

        const events = await Event.find()
            .sort({ timestamp: -1 })
            .limit(20);

        res.status(200).json({
            success: true,
            total: events.length,
            events
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};

exports.getRootCause = async (req, res) => {

    try {

        const traceId = req.params.traceId;

        const events = await Event.find({
            trace_id: traceId
        }).sort({ timestamp: 1 });

        if (events.length === 0) {

            return res.status(404).json({
                success: false,
                message: 'No events found'
            });

        }

        // Find root cause
        const rootCause = events.find(
            event => event.parent_event === null
        );

        res.status(200).json({

            success: true,

            trace_id: traceId,

            root_cause: rootCause,

            impact_chain: events

        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};
exports.getRootCause = async (req, res) => {

    try {

        const traceId = req.params.traceId;

        const events = await Event.find({
            trace_id: traceId
        });

        const rootCause = events.find(
            event => event.parent_event === null
        );

        const sideEffects = events.filter(
            event => event.parent_event !== null
        );

        res.status(200).json({
            success: true,

            trace_id: traceId,

            root_cause: rootCause,

            side_effects: sideEffects
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};
exports.getRootCause = async (req, res) => {

    try {

        const traceId = req.params.traceId;

        const events = await Event.find({
            trace_id: traceId
        }).sort({ timestamp: 1 });

        if (events.length === 0) {

            return res.status(404).json({
                success: false,
                message: 'No trace found'
            });

        }

        const rootCause = events.find(
            event => !event.parent_event
        );

        const cascadingFailures = events.filter(
            event => event.parent_event
        );

        res.status(200).json({

            success: true,

            trace_id: traceId,

            root_cause: rootCause,

            cascading_failures: cascadingFailures

        });

    } catch (error) {

        res.status(500).json({
            success: false,
            error: error.message
        });

    }

};
