const express = require('express');
const cors = require('cors');

const eventRoutes = require('./routes/eventRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', eventRoutes);

app.get('/', (req, res) => {
    res.send('DevPulse Middleware Running');
});

module.exports = app;