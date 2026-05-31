const express = require('express');
const cors = require('cors');
const { register } = require('./config/metrics');


const eventRoutes = require('./routes/eventRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', eventRoutes);

app.get('/', (req, res) => {
    res.send('DevPulse Middleware Running');
});

app.get('/metrics', async (req, res) => {

    res.set(
        'Content-Type',
        register.contentType
    );

    res.end(
        await register.metrics()
    );

});

module.exports = app;