const express = require("express")
const mysql = require("mysql2")

const app = express()
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "new_world"
})
app.get("/", (req, res) => {
  res.send("My database")
})

// What is the capital of country X ? (Accept X from user)
let x_country = "Sweden"

let sql_x = "SELECT country.Name,city.Name FROM country INNER JOIN city ON country.Capital = city.id WHERE country.Name =?"

// execute will internally call prepare and query
connection.execute(sql_x, [x_country], function (err, results, fields) {
  console.log(results) // results contains rows returned by server
})

// List all the languages spoken in the region Y (Accept Y from user)
let lang_y = "Middle East"
let sql_y = "SELECT country.Region,countrylanguage.Language FROM country INNER JOIN countrylanguage ON countrylanguage.countrycode = country.code WHERE country.Region = ?"

connection.execute(sql_y, [lang_y], function (err, results, fields) {
  console.log(results) // results contains rows returned by server
})

// Find the number of cities in which language Z is spoken (Accept Z from user)

let z = "Macedonian"
let city_num_lang_z = "SELECT count(city.Name) FROM city INNER JOIN countrylanguage ON city.countrycode = countrylanguage.countrycode WHERE Language = ?"

connection.execute(city_num_lang_z, [z], function (err, results, fields) {
  console.log(results) // results contains rows returned by server
})

app.listen("5000", function (err) {
  if (err) throw err
  console.log("Server Running at http://localhost:5000")
})
