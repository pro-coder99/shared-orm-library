const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: 5432,
    password: "abc@1234",
    database: "clarivatetest",
});

module.exports = pool;