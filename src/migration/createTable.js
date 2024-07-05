const { Client } = require('pg');

async function createTables() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "abc@1234",   // your password
    database: "clarivatetest",
  });

  await client.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        firstName VARCHAR(100) NOT NULL,
        lastName VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS settings (
        id SERIAL PRIMARY KEY,
        isNotificationEnabled BOOLEAN NOT NULL,
        isNewDashboardEnabled BOOLEAN NOT NULL,
        timezone VARCHAR(50) NOT NULL
      );
    `);

    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables', error);
  } finally {
    await client.end();
  }
}

createTables();
