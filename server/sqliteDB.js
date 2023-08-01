const sqlite3 = require('sqlite3').verbose();

// Open a database handle
const db = new sqlite3.Database(
  './myDatabase.db',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error('Error connecting to SQLite:', err.message);
      return;
    }
    console.log('Connected to the SQLite database.');
  }
);

// Function to set up your tables
function setupDatabase() {
  db.serialize(() => {
    // Create users table
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE
        )`);

    // Create posts table
    db.run(
      `
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ticker TEXT UNIQUE,
            bullish BOOLEAN,
            comment TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            votes INT,
            author_id INT,
            FOREIGN KEY(author_id) REFERENCES users(id)
        )`,
      (err) => {
        if (err) {
          console.error('Error creating tables:', err.message);
          return;
        }
        console.log('Tables created successfully!');
      }
    );
  });
}

setupDatabase();

function insertSampleData() {
  // Insert sample user
  db.run(
    `INSERT INTO users (name, email) VALUES (?, ?)`,
    ['John Doe', 'john@example.com'],
    function (err) {
      if (err) {
        return console.log(err.message);
      }
      console.log(`Inserted user with ID: ${this.lastID}`);

      // Insert sample post for user
      db.run(
        `INSERT INTO posts (bullish, comment, votes, author_id) VALUES (?, ?, ?, ?)`,
        [true, 'This is a test comment.', 5, this.lastID],
        function (err) {
          if (err) {
            return console.log(err.message);
          }
          console.log(`Inserted post with ID: ${this.lastID}`);
        }
      );
    }
  );
}

insertSampleData();

function fetchSampleData() {
  console.log('Fetching users:');
  db.each(`SELECT id, name, email FROM users`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id, row.name, row.email);
  });

  console.log('\nFetching posts:');
  db.each(
    `SELECT id, bullish, comment, votes, author_id FROM posts`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id, row.bullish, row.comment, row.votes, row.author_id);
    }
  );
}

fetchSampleData(); // Add any additional database operations you need...

// Close the database when done
// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//     return;
//   }
//   console.log('Closed the database connection.');
// });

module.exports = {
  db,
  setupDatabase,
  insertSampleData,
  fetchSampleData,
};
