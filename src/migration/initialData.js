const { Client } = require("pg");
// const {UserSchema, SettingSchema} = require('./model');

async function runMigration() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "abc@1234",
    database: "clarivatetest",
    // entities: [UserSchema, SettingSchema],
  });

  await client
    .connect()
    .then(() => {
      console.log("Connected to PostgreSQL database!");
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err);
    });

  try {
    await client.query(`
      INSERT INTO users (firstName, lastName, email, password) VALUES
      ('Harsh', 'Dogra', 'harsh.dogra@gmail.com', 'abc@1234'),
      ('Ankit', 'Dua', 'ankit.dua@gmail.com', 'xyz@8901');
    `);

    await client.query(`
      INSERT INTO settings (isNotificationEnabled, isNewDashboardEnabled, timezone) VALUES
      (true, false, 'UTC'),
      (false, true, 'IST');
    `);

    console.log("Migration completed successfully");
  } catch (error) {
    console.error("Error running migration", error);
  } finally {
    await client.end();
  }
}

runMigration();
