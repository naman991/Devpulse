const axios = require('axios');

const processedTraces = new Set();

const pollEvents = async () => {

    try {

        const response = await axios.get(
            'http://middleware-service:8000/api/events'
        );

        const events = response.data.events;

        for (const event of events) {

            if (
                event.event === 'sensor_failure' &&
                !processedTraces.has(event.trace_id)
            ) {

                processedTraces.add(event.trace_id);

                const newEvent = {

                    trace_id: event.trace_id,

                    service: 'edge-service',

                    event: 'edge_timeout',

                    parent_event: 'sensor_failure',

                    timestamp: new Date()

                };

                await axios.post(
                    'http://middleware-service:8000/api/logs',
                    newEvent
                );

                console.log(
                    `Edge reacted to trace: ${event.trace_id}`
                );

            }

        }

    } catch (error) {

        console.log(
            'Edge Error:',
            error.message
        );

    }

};

console.log('Edge Service Started...');

setInterval(pollEvents, 4000);