import { createPool } from 'mysql2/promise';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Create the connection pool. The pool-specific settings are the defaults
const connPool = createPool({
  host                  : 'localhost',
  port                  : '3307',
  user                  : '<usernamehere>',
  password              : '<password here>',
  database              : 'testing',
  waitForConnections    : true,
  connectionLimit       : 10,
  maxIdle               : 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout           : 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit            : 0,
  enableKeepAlive       : true,
  keepAliveInitialDelay : 0,
});

export async function executeQuery(query) {
    let connection;
  
    try {
      // Getting a connection from the pool
      connection = await connPool.getConnection();
      const [results, ] = await connection.execute(query);
      console.log(results);
      return results;
    } catch (error) {
      console.error('Error executing query:', error);
    } finally {
      //await sleep(2000);
  
      // Don't forget to release the connection when finished!
      if (connection) connection.release();
    }
  }