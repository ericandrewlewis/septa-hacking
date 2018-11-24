'use strict';

let data = require('./data');

const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));

app.get('/health', (req, res) =>
{
    res.json({success: true});
})

app.get('/data', (req, res) =>
{
    res.json(data);
})

app.listen(PORT, () => console.log('listening on port ' + PORT));