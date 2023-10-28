const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack);
//   }

//   const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS widget_settings (
//       id int,
//       settings jsonb
//     );
//   `;

//   client.query(createTableQuery, (err, res) => {
//     release();

//     if (err) {
//       console.error('Error creating table:', err);
//     } else {
//       console.log('Table created successfully');
//     }

//     pool.end();
//   });
// });

module.exports = pool;
