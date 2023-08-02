const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
const PORT = 3000;
const axios = require('axios');
const cookieParser = require('cookie-parser');
const Controller = require('./Controller');
const http = require('http');
const { Server } = require('socket.io');
const sqlite3 = require('sqlite3').verbose();

const {
  db,
  setupDatabase,
  insertSampleData,
  fetchSampleData,
} = require('./sqliteDB.js');

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.post('/addUsers', Controller.signIn, (req, res) => {
  db.all(`SELECT id, name, email FROM users`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// SQLite-related endpoints
app.get('/users', (req, res) => {
  db.all(`SELECT id, name, email FROM users`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/posts', (req, res) => {
  db.all(
    `SELECT id, ticker, bullish, comment, votes, author_id, created_at FROM users`,
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    }
  );
});

// app.get('/posts/:ticker', (req, res) => {
//   db.all(
//     `SELECT * FROM users WHERE name = '${req.params.ticker}';`,
//     (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }
//       res.json(rows);
//     }
//   );
// });

app.get('/posts/:Ticker', (req, res) => {
  db.all(
    `SELECT id, ticker, bullish, comment, votes, author_id, created_at FROM posts WHERE ticker = ?`,
    [req.params.Ticker],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    }
  );
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  db.run(
    `INSERT INTO users (name, email) VALUES (?, ?)`,
    [name, email],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

app.post('/fetch-data', async (req, res) => {
  const ticker = req.body.ticker; // Get the ticker from the POST request body.
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${API_KEY}`;
  console.log(ticker);
  try {
    const response = await axios.get(url, {
      headers: { 'User-Agent': 'request' },
    });
    console.log(`Response:`, response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('latest', (event) => {
    console.log('Latest event: ' + event);
  });

  socket.on('event', (event) => {
    console.log('Received an event: ' + event);
    io.emit('event', event);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
