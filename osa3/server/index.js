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

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

// Don't need 'cors ' in the version with static build in ./dist because front and back use the same origin
const cors = require("cors");
app.use(cors());

// load json-parser using built-in middleware function in Express
// se muuttaa JSON-muotoisen datan JavaScript-olioksi
// ennen kuin routen käsittelijää kutsutaan.
app.use(express.json());

// initiate middleware requestLogger
app.use(requestLogger);

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
app.get("/api/notes/:id", (request, response, next) => {
  Note.findById(request.params.id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
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
app.post("/api/notes", (req, resp, next) => {
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
  note
    .save()
    .then((savedNote) => {
      resp.json(savedNote);
    })
    .catch((error) => next(error));
});

// DELETE requested note
app.delete("/api/notes/:id", (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.put("/api/notes/:id", (request, response, next) => {
  const { content, important } = request.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(
    request.params.id,
    { content, important },
    { new: true, runValidators: true, context: "query" }
  )
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

// middlewares are exectuted after all end-ponts if no route handles the HTTP request.
app.use(unknownEndpoint);
app.use(errorHandler);

const hostname = "0.0.0.0";
const PORT = process.env.PORT;

app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
