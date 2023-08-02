const { db } = require('./sqliteDB');

const Controller = {
  signIn: async (req, res, next) => {
    try {
      const { name, email } = req.body;

      db.run(
        `INSERT INTO users (name, email) VALUES (?, ?)`,
        [name, email],
        function (err) {
          if (err) {
            res.status(500).json({ error: err.message });
            return;
          }
          console.log(`Inserted user with ID: ${this.lastID}`);
          res.cookie('user', { name: name, email: email }, { httpOnly: true });
          return next();
        }
      );
    } catch (err) {
      res.status(500).json({ error: 'An error occurred.' });
    }
  },
};

module.exports = Controller;
