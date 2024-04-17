import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
const db = new Database("weather.db");
const app = express();
app.use(express.json());
app.use(cors());

function appendMessagesFromDB() {
  const messagesToDisplay = db.prepare(`SELECT * FROM comments`).all();
  return messagesToDisplay;
}

app.get("/", function (request, response) {
  //root endpoint
  response.send("this is the root route");
});

app.get("/comments", function (request, response) {
  const comments = appendMessagesFromDB();
  response.json(comments);
  console.log(comments);
});

//run on Postman to see the data
app.post("/comments", function (request, response) {
  const messageToDisplay = request.body;
  // insert new message into database using data from req.body
  function displayComment() {
    const insertToDB = db
      .prepare(
        "INSERT INTO comments (username, location, message) VALUES(?,?,?)"
      )
      .run(
        messageToDisplay.username,
        messageToDisplay.location,
        messageToDisplay.message
      );
    console.log(insertToDB);
  }
  console.log(messageToDisplay);
  displayComment();
  response.json(messageToDisplay);
});

app.listen(8080, function () {
  console.log("app is running 8080");
});
