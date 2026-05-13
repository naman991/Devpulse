const express = require('express');
const router = express.Router();

const {
    createEvent,
    getTrace,
    getEvents,
    getRootCause
} = require('../controllers/eventController');

router.post('/logs', createEvent);

router.get('/traces/:trace_id', getTrace);

router.get('root-cause/', getRootCause);

router.get('/events', getEvents);

router.get('/root-cause/:traceId', getRootCause);

module.exports = router;