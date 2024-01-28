const express = require("express");
const bodyParser = require("body-parser");
const client = require("./typesense/client");
const csvtojson = require("csvtojson");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("./db");
app.use(cors({ credentials: true, origin: "*" }));

const server = app.listen("8989", () => {
  console.log(`listening on port ${"8989"}!`);
});

server;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//===================typesense=======================

// const schema = {
//   "name": "movies",
//   "fields": [
//     {"name": "ID", "type": "string" },
//     {"name": "Movie Name", "type": "string" },
//     {"name": "Year", "type": "string" },
//     {"name": "Timing(min)", "type": "string" },
//     {"name": "Rating(10)", "type": "string" },
//     {"name": "Votes", "type": "string" },
//     {"name": "Genre", "type": "string" },
//     {"name": "Language", "type": "string" },
//   ],
// };

// client.collections().create(schema)
//   .then(response => console.log(response))
//   .catch(error => console.error(error));

// delete collection
// client.collections('movies').delete()

// csvtojson()
//   .fromFile('./movieDb.movies.csv')
//   .then(jsonObj => {
//     client.collections('movies').documents().import(jsonObj)
//       .then(response => console.log(response))
//       .catch(error => console.error(error));
//   });

app.get("/movies", async (req, res) => {
  try {
    const searchParameters = {
      q: req.query.q,
      query_by: "Movie Name",
      per_page: 200
    };
    const searchResults = await client.collections("movies").documents().search(searchParameters);
    res.json(searchResults);
  } catch (error) {
    res.json(error);
  }
});