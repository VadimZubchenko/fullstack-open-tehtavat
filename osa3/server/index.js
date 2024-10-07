// load server using Express.js
const express = require("express");
const app = express();

// Use .env with psw and port
require("dotenv").config();

// Using a Mongoose setting as a module
const Note = require("./models/note");

// middleware for serve static files, where is index.html
app.use(express.static("../dist"));

// middleware, joka tulostaa konsoliin palvelimelle tulevien pyyntöjen perustietoja.
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

// initiate middleware requestLogger
app.use(requestLogger);

// load json-parser using built-in middleware function in Express
// se muuttaa JSON-muotoisen datan JavaScript-olioksi
// ennen kuin routen käsittelijää kutsutaan.
app.use(express.json());

// Don't need 'cors ' in the version with static build in ./dist because front and back use the same origin
const cors = require("cors");
app.use(cors());

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

// API using MongoDB
app.get("/", (req, resp) => resp.send("<h1>Hello World!</h1>"));

app.get("/api/notes", (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes);
  });
});

// GET requested note
app.get("/api/notes/:id", (request, response) => {
  Note.findById(request.params.id).then((note) => {
    response.json(note);
  });
});

// DELETE requested note
app.delete("/api/notes/:id", (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

const generateID = () => {
  // find max id number in notes
  // !!! Taulukko voidaan muuttaa yksittäisiksi luvuiksi käyttäen taulukon spread-syntaksia, eli kolmea pistettä ...taulukko.
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((n) => Number(n.id))) : 0;
  return String(maxId + 1);
};

// POST new note
app.post("/api/notes", (req, resp) => {
  const body = req.body;

  // check if body include content
  if (body.content === undefined) {
    return resp.status(400).json({ error: "content missing" });
  }

  // create note based on req body data
  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  // create notes including new note
  note.save().then((savedNote) => {
    resp.json(savedNote);
  });
});

// middleware is exectuted after all end-ponts if no route handles the HTTP request.
app.use(unknownEndpoint);

const hostname = "0.0.0.0";
const PORT = process.env.PORT;

app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

//////////////// --> Other realizations of server and database <-- ////////////////

//load server using http module of Node.js
/*const http = require("http");*/

/* // ver. 3.3
// load database using MongoDB Atlas
const mongoose = require("mongoose");

const password = process.argv[2];

// ÄLÄ KOSKAAN TALLETA SALASANOJA GitHubiin!
const url = `mongodb+srv://VadimZ:${password}@cluster0.g65io.mongodb.net/noteApp?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);
 */
// local database used in ver.2.0
/* let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
  {
    id: "4",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
]; */

// there's a possible to use 'HTTP module' of Node.js
/*const app = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify(notes));
});*/

//API using Express.js
// GET all notes
/* app.get("/", (req, resp) => resp.send("<h1>Hello World!</h1>"));

app.get("/api/notes", (req, resp) => resp.json(notes));  */

// refactoring '_id' to 'id' and delete '__v' in returnedObject from Atlas
/* noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString(); // toString because_id is Object
    delete returnedObject._id;
    delete returnedObject.__v;
  },
}); */
