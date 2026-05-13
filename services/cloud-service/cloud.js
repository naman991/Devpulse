const axios = require('axios');

const processedTraces = new Set();

const checkEvents = async () => {

    try {

        const response = await axios.get(
            'http://localhost:8000/api/events'
        );

        const events = response.data.events;

        for (const event of events) {

            if (
                event.event === 'edge_timeout' &&
                event.service === 'edge-service' &&
                !processedTraces.has(event.trace_id)
            ) {

                processedTraces.add(event.trace_id);

                const newEvent = {

                    trace_id: event.trace_id,

                    service: 'cloud-service',

                    event: 'retry_failed',

                    parent_event: 'edge_timeout',

                    timestamp: new Date()

                };

                setTimeout(async () => {

                    try {

                        await axios.post(
                            'http://localhost:8000/api/logs',
                            newEvent
                        );

                        console.log(
                            `Delayed retry failure generated for trace ${event.trace_id}`
                        );

                    } catch (error) {

                        console.log(
                            'Post Error:',
                            error.message
                        );

                    }

                }, 7000);

                console.log(
                    `Cloud service detected edge failure for trace ${event.trace_id}`
                );
            }
        }

    } catch (error) {

        console.log(
            'Fetch Error:',
            error.message
        );

    }

};

console.log('Cloud Service Started...');

setInterval(checkEvents, 5000);