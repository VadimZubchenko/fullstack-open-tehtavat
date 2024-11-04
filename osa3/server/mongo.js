const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://VadimZ:${password}@cluster0.g65io.mongodb.net/noteApp?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

// Define schema with parametries with type of data
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

// Create a model of schema
const Note = mongoose.model("Note", noteSchema);

/* const note = new Note({
  content: "Final note for Test",
  important: true,
}); */

/* note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
}) */

Note.find({ important: true }).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
