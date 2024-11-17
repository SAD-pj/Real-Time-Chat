// a test script to test the query function,not route

const query = require('./index.js');

const sql = 'select * from chat where chat_id = ?;';
const params = [1];

query(sql, params, (err, rows) => {
  if (err) {
    console.error('Error executing query:', err);
  } else {
    console.log('Query results:', rows);
  }
});