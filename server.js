'use strict';
const fetch = require('node-fetch');

const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));

app.get('/health', (req, res) =>
{
    res.json({success: true});
})

app.get('/data', async (req, res) =>
{
    const requestPromise = await fetch('http://www3.septa.org/hackathon/TransitViewAll/')
    const data = await requestPromise.json()
    res.json(data);
})

app.listen(PORT, () => console.log('listening on port ' + PORT));