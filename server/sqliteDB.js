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
// Add any additional database operations you need...
// Close the database when done
db.close((err) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Closed the database connection.');
});
