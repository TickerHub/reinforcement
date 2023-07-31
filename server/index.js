const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;
const axios = require('axios');
const request = require('request');

app.use('/', express.static(path.resolve(__dirname, '../build')));
app.use(express.json());

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.post('/fetch-data', async (req, res) => {
  const ticker = req.body.ticker; // Get the ticker from the POST request body.
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${API_KEY}`;

  try {
    const response = await axios.get(url, {
      headers: { 'User-Agent': 'request' },
    });
    console.log(`Response:`, response.data);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
