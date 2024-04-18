import Database from "better-sqlite3";
const db = new Database("weather.db");

function displayUserComments() {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS comments (
id INTEGER PRIMARY KEY AUTOINCREMENT,
username TEXT NOT NULL UNIQUE,
location TEXT NOT NULL,
message TEXT NOT NULL

)`
  ).run();

  //sample data to populate the database
  const locations = [
    {
      username: "bobiscool",
      location: "Yorkshire",
      message: "Yay it's raining!",
    },
    {
      username: "hello123",
      location: "London",
      message: "I love the rain :)",
    },
  ];

  const insertToDB = db.prepare(
    "INSERT INTO comments (username, location, message) VALUES(?,?, ?)"
  );

  locations.forEach(({ username, location, message }) => {
    const insertMessage = insertToDB.run(username, location, message);
    console.log(insertMessage);
  });
}

displayUserComments();
