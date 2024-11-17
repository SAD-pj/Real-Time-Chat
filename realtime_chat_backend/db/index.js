const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./user.db', (err) => {
    if (err) {
      console.error('Error opening database:', err.message);
    } else {
      console.log('Connected to the SQLite database.');
    }
  });


const query = function (sql, options, callback) {
  if (!callback) callback = options;

  db.serialize(() => {
    if (typeof options === 'function') {
      db.all(sql, (err, rows) => {

        callback(err, rows);
      });
    } else {
      db.all(sql, options, (err, rows) => {

        callback(err, rows);
      });
    }
  });
};

module.exports = query;









