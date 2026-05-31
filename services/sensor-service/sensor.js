const axios = require('axios');
const crypto = require('crypto');

const generateTraceId = () => {
    return crypto.randomUUID();
};

const events = [
    'sensor_failure',
    'temperature_spike',
    'signal_loss'
];

const generateEvent = async () => {

    try {

        const randomEvent =
            events[Math.floor(Math.random() * events.length)];

        const event = {
            trace_id: generateTraceId(),

            service: 'sensor-service',

            event: randomEvent,

            timestamp: new Date()
        };

        const response = await axios.post(
            'http://middleware-service:8000/api/logs',
            event
        );

        console.log('Event Sent:', response.data.data.event);

    } catch (error) {

        console.log('Error:', error.message);

    }

};

setInterval(generateEvent, 5000);