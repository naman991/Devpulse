const client = require('prom-client');

const register = new client.Registry();

client.collectDefaultMetrics({
    register
});

const totalEvents = new client.Counter({
    name: 'devpulse_events_total',
    help: 'Total events processed'
});

register.registerMetric(totalEvents);

module.exports = {
    register,
    totalEvents
};