import { useEffect, useState } from "react";
import Note from "./components/Note";
import axios from "axios";
import noteService from "./service/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  // GET ALL NOTES
  useEffect(() => {
    noteService.getAll().then((initialNote) => {
      setNotes(initialNote);
    });
  }, []);

  // ADD NEW NOTE
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    noteService.create(noteObject).then((newNote) => {
      setNotes(notes.concat(newNote)), setNewNote("");
    });
  };
  // target corresponds to the controlled input field
  // event.target.value refers to the value of the input field.
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  // UPDATE NOTE with IMPORTANT state
  const toggleImportantOf = (id) => {
    // find updatable note by id
    const updateNote = notes.find((n) => n.id === id);

    // create new note with updated important,
    // because the changing of state explicitly not recomended
    const changedNote = {
      ...updateNote,
      important: !updateNote.important,
    };
    //replace old note with updated one
    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        alert(
          `the note '${changedNote.content}' was already delete from server`
        );
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  return (
    <>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportant={() => toggleImportantOf(note.id)}
          />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </>
  );
}

export default App;
