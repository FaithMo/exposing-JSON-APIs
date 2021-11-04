const express = require("express");
const bodyParser = require("body-parser");
const pool = require('./config')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

pool.connect();

app.get("/",
  res.send("Connected"));

const createTable = () => {
  pool.query(
    "CREATE TABLE Visitors ( id SERIAL PRIMARY KEY, name VARCHAR(50), age INT, date  DATE, time TIME, assistor VARCHAR(50), comments VARCHAR(100))")
};
createTable();
app.get("/viewVisitors",
  pool.query("SELECT DISTINCT ID, Name FROM Visitors"));

app.get("/viewVisitor:id",
  pool.query("SELECT * FROM Visitors WHERE id = ${id}"));

app.post("/addNewVisitor",
  pool.query(
    `INSERT INTO Visitors(name, age, date, time, assistor, comments) VALUES ($1, $2, $3, $4, $5, $6)`,
    [data.name, data.age, data.date, data.time, data.assistor, data.comments]
  ));

app.delete("/deleteVisitor:id",
  pool.query(`DELETE FROM Visitors WHERE id = ${id}`))

app.delete("/deleteAllVisitors",
  pool.query(`DELETE FROM Visitors`));

app.put("/updateVisitor:id",
  "UPDATE Visitors SET name=($1), age=($2), date=($3), time=($4), assistor=($5), comments=($6) WHERE id=($7)",
  [
    data.name,
    data.age,
    data.date,
    data.time,
    data.assistant,
    data.comments,
    data.id,
  ]);

app.listen(port);