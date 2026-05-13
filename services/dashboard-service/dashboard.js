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
                event.event === 'retry_failed' &&
                event.service === 'cloud-service' &&
                !processedTraces.has(event.trace_id)
            ) {

                processedTraces.add(event.trace_id);

                const newEvent = {

                    trace_id: event.trace_id,

                    service: 'dashboard-service',

                    event: 'dashboard_disconnect',

                    parent_event: 'retry_failed',

                    timestamp: new Date()

                };

                setTimeout(async () => {

                    try {

                        await axios.post(
                            'http://localhost:8000/api/logs',
                            newEvent
                        );

                        console.log(
                            `Dashboard disconnected for trace ${event.trace_id}`
                        );

                    } catch (error) {

                        console.log(
                            'Post Error:',
                            error.message
                        );

                    }

                }, 5000);

                console.log(
                    `Dashboard service detected cloud retry failure for trace ${event.trace_id}`
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

console.log('Dashboard Service Started...');

setInterval(checkEvents, 5000);